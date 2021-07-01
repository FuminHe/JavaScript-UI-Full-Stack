import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

function HooksRouting() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/about",
                state: {
                  from: "root",
                },
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/users/jhon/smith">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/:firstname/:lastname?" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default HooksRouting;
