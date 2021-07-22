import { combineReducers, createStore, applyMiddleware } from "redux";
import { userReducer } from "./userStore/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userState: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
