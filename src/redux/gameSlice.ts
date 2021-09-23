import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  user: string;
  gameId: string | null;
  players: string[];
}

const initialState: GameState = {
  user: '',
  gameId: null,
  players: [],
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
    addPlayer: (state: GameState, action: PayloadAction<string>) => {
      state.players.push(action.payload);
    },
    removePlayer: (state: GameState, action: PayloadAction<string>) => {
      state.players = state.players.filter((player: string) => player !== action.payload);
    },
    endGame: (state: GameState) => {
      state.gameId = initialState.gameId;
      state.players = initialState.players;
    },
  },
});

export const { setUser, newGame, setGameId, addPlayer, removePlayer, endGame } = gameSlice.actions;
export default gameSlice.reducer;
