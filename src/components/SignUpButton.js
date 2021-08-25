import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Text } from "../context/Language";

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
      <Text tid="startButton" />
    </button>
  );
};

export default SignUpButton;
