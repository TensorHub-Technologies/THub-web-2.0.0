import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { email: "", otp: "" },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    resetUser: () => ({ email: "", otp: "" }),
  },
});

export const { setEmail, setOTP, resetUser } = userSlice.actions;
export default userSlice.reducer;
