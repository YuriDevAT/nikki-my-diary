import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="text-md rounded-xl w-28 h-16 cursor-pointer bg-rose-middle shadow-md"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Get started
    </button>
  );
};

export default SignUpButton;
