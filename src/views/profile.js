import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AllEntries from "../components/profile";
import { Footer, Hero } from "../components";

const Profile = () => {
  const { user } = useAuth0();
  const { name } = user;

  return (
    <>
      <Hero heading={`How was your day, ${name}?`} />
      <AllEntries />
      <Footer />
    </>
  );
};

export default Profile;
