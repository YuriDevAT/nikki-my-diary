import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => (
  <div className="w-72 flex justify-around">
    <NavLink to="/" exact activeClassName="">
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
      </svg>
    </NavLink>
    <NavLink to="/profile" exact className="w-8 h-8" activeClassName="">
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
      </svg>
    </NavLink>
    <NavLink to="/external-api" exact className="w-8 h-8" activeClassName="">
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />
      </svg>
    </NavLink>
  </div>
);

export default MainNav;
