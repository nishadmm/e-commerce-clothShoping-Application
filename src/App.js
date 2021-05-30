import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInUp from './components/signInUp/SignInUp';
import './App.css';

import { auth, getUserDataFromDB } from './firebase/Firebase.utils'

const App = () => {

  const [userData, setUserData] = useState(null)
  // const [unsbscribeFromAuth, setUnsbscribeFromAuth] = useState(() => null)

  useEffect(() => {
    const setUnsbscribeFromAuth = () => {
      auth.onAuthStateChanged( async (user) => {
        if(user) {
          const dataFromDB = await getUserDataFromDB(user)
          dataFromDB.onSnapshot(snapshot => {
            setUserData({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
        } else {
          setUserData(user)
        }
      })
    }
    return(
      setUnsbscribeFromAuth()
    )
    // eslint-disable-next-line
  }, [])
  console.log(userData)
  
  return (
    <Router>
      <div>
        <Header  userData={userData} />
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
