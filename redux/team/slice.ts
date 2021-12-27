import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { TeamData, TeamRequest, TeamResponse } from '../../pages/api/team';
import { RootState } from '../../redux';
import { API_PATHS } from '../../utility/paths';
import { TeamState } from './types';

export const name = 'team';

const initialState: TeamState = {
    teamsById: {},
    teamsIds: [],
};

export const fetchTeams = createAsyncThunk(`${name}/fetchTeams`, async () => {
    return (await axios.get(API_PATHS.Team)).data as unknown as TeamResponse;
});

export const fetchTeam = createAsyncThunk(
    `${name}/fetchTeam`,
    async (id: string) => {
        return (await axios.get(`${API_PATHS.Team}${id}`))
            .data as unknown as TeamData;
    }
);

export const createTeam = createAsyncThunk<
    void,
    TeamRequest,
    { state: RootState }
>(`${name}/createTeam`, async (data) => {
    axios.post(API_PATHS.Team, data);
});

export const { reducer: teamReducer, actions: teamActions } = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchTeams.fulfilled,
            (state, { payload }: PayloadAction<TeamResponse>) => {
                if (payload) {
                    state.teamsIds = payload.map(({ id }) => id);
                    state.teamsById = payload.reduce(
                        (object, team) => ({
                            ...object,
                            [team.id]: team,
                        }),
                        {}
                    );
                }
            }
        );
        builder.addCase(
            fetchTeam.fulfilled,
            (state, { payload }: PayloadAction<TeamData>) => {
                const { id } = payload;
                if (!state.teamsIds.some((teamId) => teamId === id)) {
                    state.teamsIds.push(id);
                }
                state.teamsById[id] = payload;
            }
        );
    },
});

export const getTeams = ({ team: { teamsById, teamsIds } }: RootState) =>
    teamsIds.map((id) => teamsById[id]);

export const getTeam =
    (id: string) =>
    ({ team: { teamsById } }: RootState) =>
        teamsById[Number(id)];
