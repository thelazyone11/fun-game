import React from "react";
import RandomNumberSelector from "./RandomNumberSelector";
import NavBar from "./NavBar";

function GameScreen() {
  return (
    <div>
      <NavBar></NavBar>
      <RandomNumberSelector></RandomNumberSelector>
    </div>
  );
}

export default GameScreen;
