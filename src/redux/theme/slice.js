import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    toggle: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggle } = slice.actions;
export const themeReducer = slice.reducer;
