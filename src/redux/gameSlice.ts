import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  user: string;
  gameId: string | null;
  players: string[];
  time: number;
}

const initialState: GameState = {
  user: '',
  gameId: null,
  players: [],
  time: 0,
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
      state.players.push(state.user);
    },
    setGameId: (state: GameState, action: PayloadAction<string>) => {
      state.gameId = action.payload;
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
    endGame: (state: GameState) => {
      state.gameId = initialState.gameId;
      state.players = initialState.players;
      state.time = initialState.time;
    },
  },
});

export const { setUser, newGame, setGameId, setTime, addPlayer, removePlayer, endGame } = gameSlice.actions;
export default gameSlice.reducer;
