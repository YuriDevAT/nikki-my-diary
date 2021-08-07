import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import "./index.css";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <NavBar />
      <div className="">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
