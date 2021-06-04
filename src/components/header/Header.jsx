import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import CartIcon from "./cartIcon/CartIcon";
import CartIconDropDown from "./cartIcon/cartIconDropDown/CartIconDropDown";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { selectCartHidden } from "../../redux/cart/CartSelector";
import { auth } from "../../firebase/Firebase.utils";
import "./Header.style.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartIconDropDown />}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
