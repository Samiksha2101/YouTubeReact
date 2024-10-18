import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
const appStore = configureStore({
  reducer: {
    nav: navSlice,
  },
});
export default appStore;
