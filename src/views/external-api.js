import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>External API</h1>
      <p>Blabla...</p>
      <div
        className=""
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="" onClick={callApi}>
          Get Public Message
        </button>
        <button type="button" className="" onClick={callSecureApi}>
          Get Protected Message
        </button>
      </div>
      {message &
      (
        <div className="">
          <h6 className="">Result</h6>
          <div className="">
            <div className="">
              <code className="">{message}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;
