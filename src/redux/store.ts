import { combineReducers, configureStore } from '@reduxjs/toolkit';

import gameSlice from './gameSlice';

const reducers = combineReducers({
  game: gameSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
