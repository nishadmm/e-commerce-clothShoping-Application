import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';
import './Header.style.scss'

import { auth } from '../../firebase/Firebase.utils'

const Header = ({ userData }) => {
  return (
    <div className='header'>
      <Link className="logo-container" to='/'>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option" >
          SHOP
        </Link>
        <Link to="/contact" className="option" >
          CONTACT
        </Link>
        {
          !userData ? (
            <Link to="/signin" className="option">Sign In</Link>
          ) : (
            <div className="option" onClick={() => auth.signOut()} >Sign Out</div>
          )
        }
      </div>
    </div>
  );
};

Header.propTypes = {
  userData: PropTypes.object
}

export default Header;
