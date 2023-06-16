import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import wares from './slices/wares/waresSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter,
    wares,
    cart,
  },
});
