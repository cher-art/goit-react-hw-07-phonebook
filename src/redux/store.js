import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRreducer from "./reducer";

const middleWares = [thunk];
const rootMiddleWares = applyMiddleware(...middleWares);
const store = createStore(rootRreducer, composeWithDevTools(rootMiddleWares));

export default store;
