import React from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Manatee from "./Manatee";
import Narwhal from "./Narwhal";
import Whale from "./Whale";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        {/* links to work with routes */}
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
            </li>
            <li>
              <Link to="/narwhal">Narwhal</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
            <li>
              <Link to="/whale/beluga">Beluga Whale</Link>
            </li>
            <li>
              <Link to="/whale/blue">Blue Whale</Link>
            </li>
          </ul>
        </nav>
        {/* path and component to render */}
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale/:type">
            <Whale />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
