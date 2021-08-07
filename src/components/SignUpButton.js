import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className=""
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
