import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Text } from "../context/Language";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="text-sm rounded w-20 h-12 cursor-pointer bg-rose-light shadow-md"
      onClick={() => loginWithRedirect()}
    >
      <Text tid="loginButton" />
    </button>
  );
};

export default LoginButton;
