import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      type="button"
      title="sign in"
      onClick={() => loginWithRedirect()}
      className="auth-button"
    >
      Login
    </button>
  );
};

export default LoginButton;
