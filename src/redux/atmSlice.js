import { createSlice } from "@reduxjs/toolkit";

const initialState = { balance: 1000, showAtm: false };

//Slice är ett objekt innehåller actions, state + reducer. Med createSlice förbereder vi en slice av vårt globala state
const atmSlice = createSlice({
  name: "atm",
  initialState,
  reducers: {
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    toggleAtm(state) {
      state.showAtm = !state.showAtm;
    },
  },
});

//exportera actions
export const atmActions = atmSlice.actions;
export default atmSlice.reducer;
