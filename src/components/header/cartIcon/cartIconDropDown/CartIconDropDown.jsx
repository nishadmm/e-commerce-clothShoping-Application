import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import CustomButton from "../../../customButton/CustomButton";
import CartItem from "./cartItem/CartItem";
import { SelectCartItems } from "../../../../redux/cart/CartSelector";
import { toggleCartDropdown } from "../../../../redux/cart/CartAction";
import "./CartIconDropDown.style.scss";

const CartIconDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }}
      >
        {" "}
        Go to CheckOut{" "}
      </CustomButton>
    </div>
  );
};

CartIconDropDown.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: SelectCartItems(state),
});


export default withRouter(connect(mapStateToProps)(CartIconDropDown));
