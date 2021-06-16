import React, { Component } from "react";
import { UserProvider } from "./components/userContext";
import User from "./components/user";
import Theme from "./components/theme";

export class MainContextDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        userName: "Jhon",
        gender: "male",
        age: 20,
      },

      theme: "dark",
      updateContext: this.updateContext,
    };
  }

  updateContext = (newPair) => {
    this.setState(newPair);
  };

  render() {
    return (
      <UserProvider value={this.state}>
        <div>
          <h1>Context with updating examples</h1>
          <User />
          <p>Name: {this.state.userInfo.userName}</p>
          <p>
            Gender:
            {this.state.userInfo.gender}
          </p>
          <p>Age:{this.state.userInfo.age}</p>
          <hr />
          <p>Theme:{this.state.theme}</p>
          <Theme />
        </div>
      </UserProvider>
    );
  }
}

export default MainContextDemo;
