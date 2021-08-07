import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => (
  <div className="">
    <NavLink to="/" exact className="" activeClassName="">
      Home
    </NavLink>
    <NavLink to="/profile" exact className="" activeClassName="">
      Profile
    </NavLink>
    <NavLink to="/external-api" exact className="" activeClassName="">
      External API
    </NavLink>
  </div>
);

export default MainNav;
