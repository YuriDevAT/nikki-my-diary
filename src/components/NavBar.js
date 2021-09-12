import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';

const NavBar = () => (
  <div className="container min-h-18 mx-auto">
    <nav className="h-full flex justify-around flex-wrap">
      <div className="flex items-center">
        <img
          src="/img/logo.png"
          alt="welcome message"
          className="w-6/12"
          width="50"
          height="20"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center">
        <MainNav />
        <AuthNav />
      </div>
    </nav>
  </div>
);

export default NavBar;
