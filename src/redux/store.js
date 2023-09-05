import { Reducer } from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(Reducer, composeEnhancers(applyMiddleware()));
export default myStore;
