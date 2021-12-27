import { combineReducers } from '@reduxjs/toolkit';

import { teamName, teamReducer } from './team';

const rootReducer = combineReducers({
    [teamName]: teamReducer,
});

export default rootReducer;
