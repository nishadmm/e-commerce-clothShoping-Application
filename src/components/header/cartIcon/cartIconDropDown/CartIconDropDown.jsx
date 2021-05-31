import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomButton from "../../../customButton/CustomButton";
import CartItem from "./cartItem/CartItem";
import "./CartIconDropDown.style.scss";

const CartIconDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> Go to CheckOut </CustomButton>
    </div>
  );
};

CartIconDropDown.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartIconDropDown);
