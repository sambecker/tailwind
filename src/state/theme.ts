import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TailwindColor = 'teal' | 'indigo';

export interface ThemeState {
  color: TailwindColor
}

const initialState: ThemeState = {
  color: 'teal',
};

const { actions, reducer } = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<TailwindColor>) {
      state.color = action.payload;
    },
  },
});

export const themeActions = actions;

export default reducer;
