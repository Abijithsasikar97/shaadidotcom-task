import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Loading from "./shared-components/Loading";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const authToken = localStorage.getItem("auth-token");

  if (
    (authToken === undefined || authToken === "" || authToken === null) &&
    window.location.pathname != "/"
  ) {
    window.location.href = "/";
  }

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import(`./components/Login`))}
            />
            <Route
              path="/home"
              component={lazy(() => import(`./components/HomePage`))}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
