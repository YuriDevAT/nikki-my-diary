import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
  <div className="w-72 flex justify-around m-2">
    <NavLink to="/" exact className="h-8 w-8">
      <abbr title="Home">
        <img src="/img/icons/home.svg" alt="home view" width="50" height="50" />
      </abbr>
    </NavLink>
    <NavLink to="/profile" exact className="w-8 h-8">
      <abbr title="Profile">
        <img
          src="/img/icons/user-solid-circle.svg"
          alt="profile view"
          width="50"
          height="50"
        />
      </abbr>
    </NavLink>
    <NavLink to="/calendar" exact className="w-8 h-8">
      <abbr title="Calendar">
        <img
          src="/img/icons/calendar.svg"
          alt="calendar view"
          width="50"
          height="50"
        />
      </abbr>
    </NavLink>
  </div>
);

export default MainNav;
