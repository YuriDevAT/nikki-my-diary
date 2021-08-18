import React from "react";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <div className="container h-36 mx-auto">
      <nav className="flex justify-around h-full align-middle">
        <div className="flex items-center align-items">
          <img
            src="/img/logo.png"
            alt="welcome message"
            className="w-6/12"
            width="50"
            height="50"
          />
        </div>
        <div className="flex items-center justify-around h-full">
          <MainNav />
          <AuthNav />
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default NavBar;
