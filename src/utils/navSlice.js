import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: { isMenuOpen: true },
  reducers: {
    toggleNav: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleNav, closeMenu } = navSlice.actions;
export default navSlice.reducer;
