import React from "react";
import { useLocation, useHistory } from "react-router";

function About() {
  const location = useLocation();
  const history = useHistory();

  function goBackHandle() {
    // history.goBack();
    // history.go(-2);
    // history.goForward();
    // history.push("users/Will/Park");
    history.replace({ pathname: "/" }, {});
  }
  return (
    <div>
      About
      <p>Location = {location.pathname}</p>
      <p>From = {location.state.from}</p>
      <button onClick={goBackHandle}>Go Back</button>
    </div>
  );
}

export default About;
