import { Box, Button, Typography } from '@mui/material';
import { Person, Team as TeamType } from '@prisma/client';

type TeamWithPerson = TeamType & {
    person: Person[];
};

export const Team: React.VFC<{ team: TeamWithPerson }> = ({
    team: { name, person },
}) => {
    return (
        <Box>
            <Typography>{name}</Typography>
        </Box>
    );
};
