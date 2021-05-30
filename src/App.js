import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Home from './pages/home/Home';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInUp from './components/signInUp/SignInUp';
import './App.css';

import { auth, getUserDataFromDB } from './firebase/Firebase.utils'

import { setCurrentUser } from './redux/actions/UserAction'

const App = ({ setCurrentUser }) => {


  useEffect(() => {
    const setUnsbscribeFromAuth = () => {
      auth.onAuthStateChanged( async (user) => {
        if(user) {
          const dataFromDB = await getUserDataFromDB(user)
          dataFromDB.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
        } else {
          setCurrentUser(user)
        }
      })
    }
    return (
      setUnsbscribeFromAuth()
    )
    // eslint-disable-next-line
  }, [])
  
  return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInUp} />
          </Switch>
        </div>
      </Router>
  );
};

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
