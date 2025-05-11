import { createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     changeFilter(state, action) {
//       state.name = action.payload;
//     },
//   },
// });

// export const { changeFilter } = slice.actions;
// export default slice.reducer;

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;
