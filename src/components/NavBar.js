import React from "react";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <div className="container h-36 mx-auto bg-purple-300">
      <nav className="flex justify-around h-full align-middle">
        <div className="flex items-center align-items">
          <img src="/img/logo.png" alt="" className="w-6/12" />
        </div>
        <div className="flex items-center justify-around h-full">
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
