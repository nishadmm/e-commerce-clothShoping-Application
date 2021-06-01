import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleCartDropdown } from "../../../redux/cart/CartAction";
import { ReactComponent as ShoppingBag } from "../../../assets/11.2 shopping-bag.svg";
import { totalCartItems } from '../../../redux/cart/CartSelector'
import "./CartIcon.style.scss";

const CartIcon = ({ toggleCartDropdown, totalCartItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count"> {totalCartItems} </span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
  totalCartItems: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  totalCartItems: totalCartItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
