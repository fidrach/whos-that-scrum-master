import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CreateTeam } from '../components/create-team';
import { Team } from '../components/team';
import { useAppDispatch } from '../redux/store';
import { fetchTeams, getTeams } from '../redux/team';

const HomePage: NextPage = () => {
    const teams = useSelector(getTeams);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTeams());
    }, []);

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Typography>Who's that scrum master!?</Typography>

                <Box mb={2} />

                {teams.map((team) => (
                    <Team key={team.id} team={team} />
                ))}

                <CreateTeam />
            </Box>
        </Box>
    );
};

export default HomePage;
