import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInUp from './components/signInUp/SignInUp';
import './App.css';
import { auth } from './firebase/Firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  const [unSubscribeFromAuth, setUnSubscribeFromAuth] = useState(() => null);

  useEffect(() => {
    // Call ComponenetDidMount
    setUnSubscribeFromAuth(() =>
      auth.onAuthStateChanged((user) => setCurrentUser(user))
    );
    return () => {
      // Call ComponenetWillUnMount for avoide memory leakage
      unSubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, [auth.onAuthStateChanged]);

  console.log(currentUser);

  return (
    <Router>
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
