import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/home/Home";
import ShopPage from "./pages/shop/ShopPage";
import CheckOut from "./pages/checkout/CheckOut";
import Header from "./components/header/Header";
import SignInUp from "./components/signInUp/SignInUp";
import { auth, getUserDataFromDB } from "./firebase/Firebase.utils";
import { setCurrentUser } from "./redux/user/UserAction";
import { selectCurrentUser } from "./redux/user/UserSelector";
import "./App.css";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const setUnsbscribeFromAuth = () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const dataFromDB = await getUserDataFromDB(user);
          dataFromDB.onSnapshot((snapshot) => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        } else {
          setCurrentUser(user);
        }
      });
    };
    return setUnsbscribeFromAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUp />)}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
