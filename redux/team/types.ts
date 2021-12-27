import { TeamData } from '../../pages/api/team';

export type TeamState = {
    teamsIds: number[];
    teamsById: Record<number, TeamData>;
};
