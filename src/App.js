import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar, Loading } from './components';
import ProtectedRoute from './auth/protected-route';
import './index.css';

const Dashboard = lazy(() => import('./views/dashboard'));
const Profile = lazy(() => import('./views/profile'));
const About = lazy(() => import('./views/about'));

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/about" component={About} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
