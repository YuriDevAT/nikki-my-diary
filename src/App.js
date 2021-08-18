import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Loading } from "./components";
import ProtectedRoute from "./auth/protected-route";
import "./index.css";

const Home = lazy(() => import("./views/home"));
const Profile = lazy(() => import("./views/profile"));
const Calendar = lazy(() => import("./views/calendar"));

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/calendar" component={Calendar} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
