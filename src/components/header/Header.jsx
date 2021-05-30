import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {  connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';
import './Header.style.scss'

import { auth } from '../../firebase/Firebase.utils'

const Header = ({ currentUser }) => {
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
          !currentUser ? (
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
  currentUser: PropTypes.object
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(Header);
