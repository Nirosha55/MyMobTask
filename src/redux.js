import {createSlice} from '@reduxjs/toolkit';

const AppSlice = createSlice({
  name: 'App',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});
export const {increment, decrement} = AppSlice.actions;
export default AppSlice.reducer;
