import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';

import { CreateTeam } from '../components/create-team';

const HomePage: NextPage = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            flexDirection="column"
        >
            <Typography>Who's that scrum master!?</Typography>
            <CreateTeam />
        </Box>
    );
};

export default HomePage;
