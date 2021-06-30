import React from "react";
import { useParams } from "react-router-dom";
import Beluga from "./Whale_Beluga";
import Blue from "./Whale_Blue";

function Whale() {
  const { type } = useParams();
  return (
    <div>
      <h2>Whale</h2>
      {type === "beluga" && <Beluga />}
      {type === "blue" && <Blue />}
    </div>
  );
}

export default Whale;
