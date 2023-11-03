"use client";

import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  const statebreakTime = useSelector((state) => state.breakTime);
  const stateplayTime = useSelector((state) => state.playTime);
  return (
    <div className="navbar bg-pink-600">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Fun-game</a>
      </div>
      <div>Play Time : {stateplayTime}</div>
      <div>Break Time : {statebreakTime}</div>

      <div className="navbar-end">
        <a className="btn">Exit</a>
      </div>
    </div>
  );
}

export default NavBar;
