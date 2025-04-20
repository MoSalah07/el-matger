import { ICartProduct } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addItemToShoppingCart } from "@/lib/actions/addItemToShoppingCart";

interface IState {
  cartProducts: ICartProduct[];
}

const initialState: IState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction: (
      state,
      action: PayloadAction<{ product: ICartProduct; quantity: number }>
    ): void => {
      state.cartProducts = addItemToShoppingCart({
        cartItem: action.payload.product,
        shoppingCartItems: state.cartProducts,
        quantity: action.payload.quantity,
      });
    },
    removeToCartAction: (
      state,
      action: PayloadAction<{ id: string }>
    ): void => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateToCartAction: (
      state,
      action: PayloadAction<{ product: ICartProduct; quantity: number }>
    ): void => {
      const { product, quantity } = action.payload;
      const exists = state.cartProducts.find(
        (item) => item.id === action.payload.product.id
      );
      if (!exists) return;

      state.cartProducts = state.cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      );
    },
    clearToCartAction: (state): void => {
      state.cartProducts = [];
    },
  },
});
export const {
  addToCartAction,
  removeToCartAction,
  updateToCartAction,
  clearToCartAction,
} = cartSlice.actions;
export const selectCart = ({ cart }: RootState) => cart;
export default cartSlice.reducer;
