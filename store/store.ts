import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./features/cart.slices";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
