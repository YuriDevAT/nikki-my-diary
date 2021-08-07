import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      title="Sign out"
      className="bg-white border-0"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <svg
        className="w-8 mr-6 cursor-pointer bg-white border-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3
                                3 0 013 3v1"
        ></path>
      </svg>
    </button>
  );
};

export default LogOutButton;
