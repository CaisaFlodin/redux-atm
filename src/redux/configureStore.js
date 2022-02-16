import { configureStore } from "@reduxjs/toolkit";
import atmReducer from "./atmSlice";
//configureStore mergear alla reducers till en
const store = configureStore({
  reducer: {
    atm: atmReducer,
  },
});
export default store;
