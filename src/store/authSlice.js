import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userData: undefined,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.userData = action.payload;
      if (action.payload?.isAdmin) {
        state.userRole = "admin";
      } else {
        state.userRole = "loggedIn";
      }
      state.token = action.payload.token;
    },
    logout(state) {
      state.loggedIn = false;
      state.userData = undefined;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
