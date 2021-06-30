// import "./App.css";
// // import MainContextDemo from "./components/context/main";
// // import UseContext from "./components/hooks/useContext";
// // import ReduxThunkStore from "./components/Redux_Thunk/reactComponent/index";
// // import FluxApp from "./components/flux/App";
// import { Provider } from "react-redux";
// import store from "./components/mock/counterStore/reduxStore";
// import ButtonClick from "./components/mock/button";

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <ButtonClick />
//       </div>
//     </Provider>
//   );
// }

// export default App;

//----------------------------------------------------
import Routing from "./components/routing/react_router_dom/index";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
