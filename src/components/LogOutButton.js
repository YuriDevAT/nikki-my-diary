import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      title="Sign out"
      className="auth-button"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
