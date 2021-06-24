import React from "react";
import { Provider } from "react-redux";
import reduxStore from "../reduxStore/store";
import CakeComponent from "./cakeComponent";
import UserComponent from "./userComponent";

function ReduxThunkStore() {
  return (
    <Provider store={reduxStore}>
      <CakeComponent />
      <hr />
      <UserComponent />
    </Provider>
  );
}

export default ReduxThunkStore;
