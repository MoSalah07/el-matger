import { ICartProduct } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  addItemToShoppingCart,
  saveCartToLocalStorage,
} from "@/lib/actions/addItemToShoppingCart";

interface IState {
  cartProducts: ICartProduct[];
}

// const initialState: IState = {
//   cartProducts: typeof window !== "undefined" ? getCartFromLocalStorage() : [],
// };
const initialState: IState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<ICartProduct>): void => {
      state.cartProducts = addItemToShoppingCart({
        cartItem: action.payload,
        shoppingCartItems: state.cartProducts,
      });
      saveCartToLocalStorage(state.cartProducts);
    },
  },
});
export const { addToCartAction } = cartSlice.actions;
export const selectCart = ({ cart }: RootState) => cart;
export default cartSlice.reducer;
