import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { SelectCartItems, cartTotalPrice } from "../../redux/cart/CartSelector";
import CheckOutItem from "./checkOutItem/CheckOutItem";
import StripeButton from '../../components/stripeButton/StripeButton'
import "./CheckOut.style.scss";

const CheckOut = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      <div className="total">
        <span>Total $ {totalPrice} </span>
      </div>
      <div className="test-warning">
        * Please use followind credentials for test payment *
        <br />
        4242 4242 4242 4242 - Exp : 01/24 - CW : 123 
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

CheckOut.propTypes = {
  cartItems: PropTypes.array,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  totalPrice: cartTotalPrice,
});

export default connect(mapStateToProps)(CheckOut);
