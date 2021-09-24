import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  user: string;
  gameId: string | null;
  players: string[];
  time: number | null;
}

const initialState: GameState = {
  user: '',
  gameId: null,
  players: [],
  time: null,
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
  },
});

export const { setUser, newGame, setTime, addPlayer, removePlayer } = gameSlice.actions;
export default gameSlice.reducer;
