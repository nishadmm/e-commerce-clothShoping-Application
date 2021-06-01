import React from "react";
import { connect } from "react-redux";

import {
  removeItem,
  addItem,
  decreaseQuantity,
} from "../../../redux/cart/CartAction";
import "./checkOutItem.style.scss";

const CheckOutItem = ({ cartItem, dispatch }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => dispatch(decreaseQuantity(id))}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(removeItem(id))}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckOutItem);
