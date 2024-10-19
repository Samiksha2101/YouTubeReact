import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const appStore = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default appStore;
