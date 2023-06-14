import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wares: [],
  ware: {}
};

const waresSlice = createSlice({
  name: 'wares',
  initialState,
  reducers: {
    setWares(state, action) {
      state.wares = action.payload;
    },
    setWare(state, action) {
      state.ware = action.payload;
    },
  },
});

export const { setWares, setWare } = waresSlice.actions;

export default waresSlice.reducer;
