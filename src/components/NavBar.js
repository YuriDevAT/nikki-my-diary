import React from "react";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
  return (
    <div className="h-15 border-b mb-16 pb-4">
      <nav className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-center flex items-center align-items">
            <h1 className="flex justify-center w-full">
              <img src="/img/logo.png" alt="" className="mt-2 w-6/12" />
            </h1>
          </div>
          <div className="text-center flex items-center align-items mt-8">
            <MainNav />
            <AuthNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
