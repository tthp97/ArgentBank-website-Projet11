import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
    },
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setNewUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { setToken, setUserInfo, setNewUserName, logout } =
  authSlice.actions;
export default authSlice.reducer;
