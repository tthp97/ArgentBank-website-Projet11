import authSlice from "./authSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: { auth: authSlice },
  devTools: true,
});
export default store;
