import { IProduct } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IState {
  cartProducts: IProduct[];
}

const initialState: IState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const selectCart = ({ cart }: RootState) => cart;
export default cartSlice.reducer;
