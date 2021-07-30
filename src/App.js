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
import {
  auth,
  getUserDataFromDB,
  AddNewCollectionAndDocuments,
} from "./firebase/Firebase.utils";
import { setCurrentUser } from "./redux/user/UserAction";
import { selectCurrentUser } from "./redux/user/UserSelector";
import { selectShopCollectionsForPreview } from "./redux/shop/ShopSelectors";
import "./App.css";
import { createStructuredSelector } from "reselect";

const App = ({ setCurrentUser, currentUser, collectionsArray }) => {
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
    AddNewCollectionAndDocuments(
      "collection",
      collectionsArray.map(({ title, items }) => ({ title, items }))
    );
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

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   collectionsArray: selectShopCollectionsForPreview
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
