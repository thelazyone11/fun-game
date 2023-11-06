"use client";

import React from "react";

function NavBar() {
  return (
    <header className="navbar bg-pink-600 sticky">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Fun-game</a>
      </div>

      <div className="navbar-end">
        <a className="btn">End</a>
      </div>
    </header>
  );
}

export default NavBar;
