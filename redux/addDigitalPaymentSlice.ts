import { createSlice } from "@reduxjs/toolkit";

export const addDigitalPaymentSlice = createSlice({
  name: "ADD_DIGITAL_PAYMENT",
  initialState: {},
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});

export const {} = addDigitalPaymentSlice.actions;
export default addDigitalPaymentSlice.reducer;
