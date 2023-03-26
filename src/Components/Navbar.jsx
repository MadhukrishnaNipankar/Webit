import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            CodeConnect
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
