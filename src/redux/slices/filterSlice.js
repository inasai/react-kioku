import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: 0,
  sort: {
    name: 'популярне',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategories, setSort } = filterSlice.actions;

export default filterSlice.reducer;
