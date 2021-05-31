import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import RootReducer from "./reducers/RootReducer";

const middleWares = [logger];

const Store = createStore(RootReducer, applyMiddleware(...middleWares));

export default Store;
