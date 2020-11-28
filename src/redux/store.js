import { applyMiddleware, createStore } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import rootRreducer from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [logger, thunk];

const rootMiddleWares = applyMiddleware(...middleWares);
const compose = composeWithDevTools(rootMiddleWares);

const store = createStore(rootRreducer, compose);

export default store;
