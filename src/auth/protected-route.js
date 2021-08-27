import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../utils/Loading';

const ProtectedRoute = ({ component, ...arg }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...arg}
  />
);

export default ProtectedRoute;
