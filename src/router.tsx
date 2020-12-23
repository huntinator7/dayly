import { Router } from "@reach/router";
import React, { FunctionComponent } from "react";
import { SuspenseWithPerf } from "reactfire";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Day from "./pages/Day";

export const Routes: FunctionComponent<any> = (props) => {
  return (
    <SuspenseWithPerf fallback="Loading..." traceId="main">
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Day path="/day/:date" />
      </Router>
    </SuspenseWithPerf>
  );
};
