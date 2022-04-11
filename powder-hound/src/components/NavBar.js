import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
  return (
    <div>
      <NavLink className="navbar" exact to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink className="navbar" exact to="/Gear" style={linkStyles}>
       Gear
      </NavLink>
      <NavLink className="navbar" exact to="/PowderRater" style={linkStyles}>
        PowderRater
      </NavLink>
    </div>
  )
}

export default NavBar;
