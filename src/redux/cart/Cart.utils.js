export const AddItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseQunatityOfItem = (cartItems, idOfSelectedcartItem) => {

  const existingCartItem = cartItems.find(cartItem => cartItem.id === idOfSelectedcartItem)

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== idOfSelectedcartItem )
  }

  return cartItems.map((cartItem) =>
    cartItem.id === idOfSelectedcartItem
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
