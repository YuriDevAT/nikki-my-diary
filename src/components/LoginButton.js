import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      className="text-sm rounded-full uppercase w-32 h-12 cursor-pointer 
      bg-green-dark shadow-md"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
