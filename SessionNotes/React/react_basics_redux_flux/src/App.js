import "./App.css";
// import MainContextDemo from "./components/context/main";
// import UseContext from "./components/hooks/useContext";
// import ReduxThunkStore from "./components/Redux_Thunk/reactComponent/index";

// import FluxApp from "./components/flux/App";
import { Provider } from "react-redux";
import store from "./components/mock/counterStore/reduxStore";
import ButtonClick from "./components/mock/button";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ButtonClick />
      </div>
    </Provider>
  );
}

export default App;
