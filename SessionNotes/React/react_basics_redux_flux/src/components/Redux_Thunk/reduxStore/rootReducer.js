import { combineReducers } from "redux";

import cakeReducer from "./stupidCakeStore/cakeReducer";
import userReducer from "./asyncUserStore/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer,
});

export default rootReducer;
