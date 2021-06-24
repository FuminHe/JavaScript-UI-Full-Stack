import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// use thunk
const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
// const reduxStore = createStore(rootReducer);
export default reduxStore;
