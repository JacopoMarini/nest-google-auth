import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData, AuthState } from "./model";

const initialState: AuthState = {
  authData: localStorage.getItem("authData")
    ? JSON.parse(localStorage.getItem("authData") as string)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<AuthData | null>) => {
      state.authData = payload;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
