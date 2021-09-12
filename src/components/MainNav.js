import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <div className="main-nav">
    <NavLink to="/" exact>
      Catalogue
    </NavLink>
    <NavLink to="/profile" exact>
      Sell a Bike
    </NavLink>
    <NavLink to="/about" exact>
      About Us
    </NavLink>
  </div>
);

export default MainNav;
