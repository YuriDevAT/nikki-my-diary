import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      title="Sign out"
      className="font-semibold text-sm rounded w-20 h-12 cursor-pointer text-rose-dark border border-rose-dark shadow-md"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Sign Out
    </button>
  );
};

export default LogOutButton;
