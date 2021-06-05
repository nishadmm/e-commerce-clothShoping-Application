import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import RootReducer from "./reducers/RootReducer";

const middleWares = [];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const Store = createStore(RootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(Store);
