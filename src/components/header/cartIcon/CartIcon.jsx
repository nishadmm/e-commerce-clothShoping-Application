import React from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleCartDropdown } from '../../../redux/actions/CartAction'

import { ReactComponent as ShoppingBag } from "../../../assets/11.2 shopping-bag.svg";
import './CartIcon.style.scss'

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown} >
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">3</span>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCartDropdown: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(null, mapDispatchToProps)(CartIcon);
