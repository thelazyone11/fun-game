import React from "react";
import RandomNumberSelector from "./RandomNumberSelector";
import NavBar from "./NavBar";
import Footer from "./footer";

function GameScreen() {
  return (
    <div>
      <NavBar></NavBar>
      <RandomNumberSelector></RandomNumberSelector>
      <Footer></Footer>
    </div>
  );
}

export default GameScreen;
