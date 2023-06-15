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
    addWare(state, action) {
      state.wares = [...state.wares, action.payload];
    },
    deleteWare(state, action) {
      const filteredWares = state.wares.filter(ware => ware.id !== action.payload)
      state.wares = filteredWares;
    }
  },
});

export const { setWares, setWare, addWare, deleteWare } = waresSlice.actions;

export default waresSlice.reducer;
