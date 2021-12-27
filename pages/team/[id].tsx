import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PageMessage } from '../../components/page-message';
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
        return <Box>{team.name}</Box>;
    }
    return <PageMessage message="Uhhh this team doesn't exist - womp womp" />;
};

export default TeamView;
