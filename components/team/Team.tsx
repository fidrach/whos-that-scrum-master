import { Box, Button, Card as MUCard, Typography, styled } from '@mui/material';
import { Person, Team as TeamType } from '@prisma/client';

import { TeamData } from '../../pages/api/team';

export const Team: React.VFC<{ team: TeamData }> = ({
    team: { name, person: member },
}) => {
    return (
        <Card>
            <Box p={2}>
                <Typography align="center">{name}</Typography>
            </Box>
        </Card>
    );
};

const Card = styled(MUCard)({
    marginBottom: 16,
});
