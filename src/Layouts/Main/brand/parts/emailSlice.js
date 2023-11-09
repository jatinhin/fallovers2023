import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: "",
  // Reducer function to update the email state
  reducers: {
    setEmail: (state, action) => action.payload,
  },
});

export const { setEmail } = emailSlice.actions;
export const selectEmail = (state) => state.email;
export default emailSlice.reducer;
