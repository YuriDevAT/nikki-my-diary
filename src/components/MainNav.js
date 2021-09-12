import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <div className="sm:w-96 w-80 flex justify-around m-2 text-lg">
    <NavLink to="/" exact>
      Catalogue
    </NavLink>
    <NavLink to="/profile" exact>
      Profile
    </NavLink>
    <NavLink to="/about" exact>
      About Us
    </NavLink>
  </div>
);

export default MainNav;
