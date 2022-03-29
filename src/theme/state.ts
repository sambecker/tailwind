import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TailwindColor } from '.';

export interface ThemeState {
  selectedColor: TailwindColor
}

const initialState: ThemeState = {
  selectedColor: 'teal',
};

const { actions, reducer } = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<TailwindColor>) {
      state.selectedColor = action.payload;
    },
  },
});

export const themeActions = actions;

export default reducer;
