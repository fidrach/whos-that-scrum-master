import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
    return (
        <Box>
            <Typography>Who's that scrum master!?</Typography>
            <Button color="primary">Click mee</Button>
        </Box>
    );
};

export default HomePage;
