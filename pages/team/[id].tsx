import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Box,
    CircularProgress,
    Collapse,
    Typography,
    styled,
} from '@mui/material';
import { Person, Type } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PageMessage } from '../../components/page-message';
import { PokemonShadow } from '../../components/pokemon-shadow';
import { useAppDispatch } from '../../redux/store';
import { fetchTeam, getTeam, updateTeamScrumMaster } from '../../redux/team';

const TeamView: NextPage = () => {
    const router = useRouter();

    const id = router.query.id as string;

    const dispatch = useAppDispatch();

    const team = useSelector(getTeam(id));

    useEffect(() => {
        if (id) {
            dispatch(fetchTeam(id));
        }
    }, [id]);

    const [openMembers, setOpenMembers] = useState(false);

    const toggleOpenMembers = () => {
        setOpenMembers(!openMembers);
    };

    if (team) {
        return (
            <Box>
                <Typography variant="h5">{team.name}</Typography>

                <Box mb={5} />

                <MembersContainer onClick={toggleOpenMembers}>
                    <Typography component="span">Members</Typography>
                    <Box mr={2} />
                    {openMembers ? <ExpandLess /> : <ExpandMore />}
                </MembersContainer>

                <Box mb={2} />

                <Collapse in={openMembers}>
                    {team.person.map(({ person, id }) => (
                        <Member key={id} member={person} />
                    ))}
                </Collapse>

                <Box mb={2} />

                <PokemonShadow
                    onPrevious={() => {
                        dispatch(
                            updateTeamScrumMaster({ id, direction: 'previous' })
                        );
                    }}
                    onNext={() => {
                        dispatch(
                            updateTeamScrumMaster({ id, direction: 'next' })
                        );
                    }}
                    revealUrl="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&rect=0%2C54%2C1997%2C1053&poi=face&w=1997&h=999&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F09%2F07%2FGettyImages-488099013.jpg"
                />
            </Box>
        );
    }
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <CircularProgress />
        </Box>
    );
};

const Member: React.VFC<{ member: Person }> = ({ member: { name, type } }) => (
    <Box>
        <Typography component="span">{name}</Typography>
        <Typography component="span">{` - [${type}]`}</Typography>
    </Box>
);

const MembersContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    minWidth: 200,
    '&: hover': {
        cursor: 'pointer',
    },
});

export default TeamView;
