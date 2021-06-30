import { createStore } from "redux";
import countReducer from "./counterReducer";

const store = createStore(countReducer);

export default store;
