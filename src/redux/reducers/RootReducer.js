import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "../user/UserReducer";
import CartReducer from "../cart/CartReducer";
import DirectoryReducer from "../directory/DirectoryReducer";

const PersistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
});

export default persistReducer(PersistConfig, rootReducer);
