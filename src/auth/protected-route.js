import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";

const ProtectedRoute = ({ component, ...arg }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...arg}
  />
);

export default ProtectedRoute;
