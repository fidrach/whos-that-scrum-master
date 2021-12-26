import { Box, Button, Typography } from '@mui/material';
import { Person, Team } from '@prisma/client';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { API_PATHS } from '../../utility/paths';

type TeamWithPerson = Team & {
    person: Person[];
};

export const CreateTeam: React.VFC = () => {
    const [teams, setTeams] = useState<TeamWithPerson[]>([]);

    useEffect(() => {
        axios.get(API_PATHS.Team).then((team) => {
            console.log('axios got whattt', team);
        });
    }, []);

    return (
        <Box>
            <Button>Create Team</Button>
        </Box>
    );
};
