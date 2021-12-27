import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import rootReducer from './reducer';

const enableDevTools =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? true
        : false;

export const store = configureStore({
    reducer: rootReducer,
    devTools: enableDevTools,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
