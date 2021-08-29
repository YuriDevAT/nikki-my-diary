import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <div className="w-96 flex justify-around m-2 text-lg">
    <NavLink to="/" exact>
      home
    </NavLink>
    <NavLink to="/profile" exact>
      profile
    </NavLink>
    <NavLink to="/calendar" exact>
      calendar
    </NavLink>
  </div>
);

export default MainNav;
