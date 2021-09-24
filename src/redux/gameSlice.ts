import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  user: string;
  gameId: string | null;
  players: string[];
  time: number;
  started: boolean;
}

const initialState: GameState = {
  user: '',
  gameId: null,
  players: [],
  time: 90,
  started: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUser: (state: GameState, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    newGame: (state: GameState, action: PayloadAction<string>) => {
      state.gameId = action.payload;
      state.players = [state.user];
    },
    setTime: (state: GameState, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    addPlayer: (state: GameState, action: PayloadAction<string>) => {
      state.players.push(action.payload);
    },
    removePlayer: (state: GameState, action: PayloadAction<string>) => {
      state.players = state.players.filter((player: string) => player !== action.payload);
    },
    setStarted: (state: GameState, action: PayloadAction<boolean>) => {
      state.started = action.payload;
      if (!state.started) {
        state.gameId = null;
      }
    },
  },
});

export const { setUser, newGame, setTime, addPlayer, removePlayer, setStarted } = gameSlice.actions;
export default gameSlice.reducer;
