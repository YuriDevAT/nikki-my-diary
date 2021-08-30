import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Text } from '../context/Language';

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      title="Sign out"
      className="text-sm rounded-full uppercase w-32 h-12 cursor-pointer 
      text-black border border-black shadow-md bg-white-base font-semibold"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <Text tid="LogOutButton" />
    </button>
  );
};

export default LogOutButton;
