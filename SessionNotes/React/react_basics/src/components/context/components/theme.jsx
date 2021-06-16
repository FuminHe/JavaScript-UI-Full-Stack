import React, { Component } from "react";
import { UserComsumer } from "./userContext";

export class Theme extends Component {
  render() {
    return (
      <div>
        <UserComsumer>
          {({ theme, updateContext }) => {
            return (
              <button
                onClick={() =>
                  updateContext({
                    theme: theme === "dark" ? "white" : "dark",
                  })
                }
              >
                Click to change theme
              </button>
            );
          }}
        </UserComsumer>
      </div>
    );
  }
}

export default Theme;
