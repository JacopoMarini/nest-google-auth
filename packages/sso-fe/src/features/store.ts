import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";

const rootReducer = {
  auth: authReducer,
};

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
};
export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};
