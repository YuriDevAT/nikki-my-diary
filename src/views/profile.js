import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <div className="">
        <div className="">
          <img src={picture} alt="profile" className="" />
        </div>
        <div className="">
          <h2>{name}</h2>
          <p className="">{email}</p>
        </div>
      </div>
      <div className="">
        <pre className="">{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Profile;
