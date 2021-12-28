import { Box, Typography } from '@mui/material';
import { Person, Type } from '@prisma/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PageMessage } from '../../components/page-message';
import { PokemonShadow } from '../../components/pokemon-shadow';
import { useAppDispatch } from '../../redux/store';
import { fetchTeam, getTeam } from '../../redux/team';

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

    if (team) {
        return (
            <Box>
                <Typography variant="h5">{team.name}</Typography>

                <Box mb={5} />

                <Typography>Members</Typography>

                <Box mb={2} />

                {team.person.map(({ person, id }) => (
                    <Member key={id} member={person} />
                ))}

                <PokemonShadow />
            </Box>
        );
    }
    return <PageMessage message="Uhhh this team doesn't exist - womp womp" />;
};

const Member: React.VFC<{ member: Person }> = ({ member: { name } }) => (
    <Box>
        <Typography component="span">{name}</Typography>
    </Box>
);

export default TeamView;
