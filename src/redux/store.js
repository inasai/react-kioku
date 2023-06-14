import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import wares from './slices/wares/waresSlice';

export const store = configureStore({
  reducer: {
    filter,
    wares
  },
});
