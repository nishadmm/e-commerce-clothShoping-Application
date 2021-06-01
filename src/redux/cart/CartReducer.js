import { CartActionTypes } from "./CartActionTypes";
import { AddItemToCart } from "./Cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
