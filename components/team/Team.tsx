import { Box, Button, Card as MUCard, Typography, styled } from '@mui/material';
import { useRouter } from 'next/router';

import { TeamData } from '../../pages/api/team';
import { PATHS } from '../../utility/paths';

export const Team: React.VFC<{ team: TeamData }> = ({
    team: { name, person: member, id },
}) => {
    const router = useRouter();

    return (
        <Card
            onClick={() => {
                router.push(`${PATHS.Team}${id}`);
            }}
        >
            <Box p={2}>
                <Typography align="center">{name}</Typography>
            </Box>
        </Card>
    );
};

const Card = styled(MUCard)({
    marginBottom: 16,
    '&:hover': {
        cursor: 'pointer',
    },
});
