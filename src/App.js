import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, Calender } from "./views";
import ProtectedRoute from "./auth/protected-route";
import "./index.css";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto h-screen">
      <NavBar />
      <div className="mt-10 px-10">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/calender" component={Calender} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
