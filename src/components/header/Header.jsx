import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import CartIcon from "./cartIcon/CartIcon";
import CartIconDropDown from "./cartIcon/cartIconDropDown/CartIconDropDown";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import { selectCartHidden } from "../../redux/cart/CartSelector";
import { auth } from "../../firebase/Firebase.utils";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.style";
import "./Header.style.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {!currentUser ? (
          <OptionLink to="/signin">Sign In</OptionLink>
        ) : (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartIconDropDown />}
    </HeaderContainer>
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
