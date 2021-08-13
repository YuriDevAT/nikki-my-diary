import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from "../components/Hero";
import AllEntries from "../components/entries";

const Profile = () => {
  const { user } = useAuth0();
  const { name } = user;

  return (
    <div className="">
      <Hero heading={"How was your day"} />
      <div className="">
        <div className="">
          <h2 className="text-right italic text-lg">Hello, {name}!</h2>
        </div>
        <div className="">
          <AllEntries />
        </div>
      </div>
    </div>
  );
};

export default Profile;
