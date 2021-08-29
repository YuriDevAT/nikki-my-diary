import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from './components';
import Loading from './utils/Loading';
import ProtectedRoute from './auth/protected-route';
import './index.css';
import { LanguageProvider } from './context/Language';
import LanguageSelector from './components/LanguageSelector';

const Home = lazy(() => import('./views/home'));
const Profile = lazy(() => import('./views/profile'));
const Calendar = lazy(() => import('./views/calendar'));

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <LanguageProvider>
      <div className="h-screen bg-gradient-to-br from-lila-light to-rose-light">
        <NavBar />
        <div className="container mx-auto">
          <LanguageSelector />
        </div>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/calendar" component={Calendar} />
          </Switch>
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;
