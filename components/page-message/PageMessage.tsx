import { Box, Typography } from '@mui/material';

type Props = {
    message: string;
};

export const PageMessage: React.VFC<Props> = ({ message }) => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
    >
        <Typography>{message}</Typography>
    </Box>
);
