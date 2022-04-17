import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {    
  display: "inline-block",
  textAlign: "center"
};

function NavBar() {
  return (
    <div>
      <NavLink className="navbar" exact to="/" style={linkStyles}>
        Home
      </NavLink>
      <NavLink className="navbar" exact to="/powder-rater" style={linkStyles}>
        Powder Rater
      </NavLink>
      <NavLink className="navbar" exact to="/gear" style={linkStyles}>
        Gear
      </NavLink>
    </div>
  )
}

export default NavBar;