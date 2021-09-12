import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';

const NavBar = () => (
  <nav className="nav-bar">
    <img src="/img/logo.png" alt="welcome message" width="150" />
    <MainNav />
    <AuthNav />
  </nav>
);

export default NavBar;
