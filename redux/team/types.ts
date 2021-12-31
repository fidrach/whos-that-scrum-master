import { TeamData, TeamRequest } from '../../pages/api/team';

export type TeamState = {
    teamsIds: number[];
    teamsById: Record<number, TeamData>;
};

export type UpdateRequest = {
    id: string;
    direction: 'next' | 'previous';
};
