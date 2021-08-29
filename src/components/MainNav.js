import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '../context/Language';

const MainNav = () => (
  <div className="sm:w-96 w-80 flex justify-around m-2 text-lg">
    <NavLink to="/" exact>
      <Text tid="homeView" />
    </NavLink>
    <NavLink to="/profile" exact>
      <Text tid="profileView" />
    </NavLink>
    <NavLink to="/calendar" exact>
      <Text tid="calendarView" />
    </NavLink>
  </div>
);

export default MainNav;
