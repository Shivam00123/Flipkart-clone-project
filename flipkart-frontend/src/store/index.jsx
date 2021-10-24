import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-thunk";

let store;
export function configStore() {
  store = createStore(reducers, applyMiddleware(thunk, logger));
  return store;
}
