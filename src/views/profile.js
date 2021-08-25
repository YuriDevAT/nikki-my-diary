import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileView from "../components/profile";

const Profile = () => {
  const { user } = useAuth0();
  const { name } = user;

  return (
    <>
      <ProfileView />
    </>
  );
};

export default Profile;
