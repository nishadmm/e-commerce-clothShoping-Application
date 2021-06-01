import { CartActionTypes } from "./CartActionTypes";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: CartActionTypes.DECREASE_QUANTITY,
  payload: id
})
