import { HashRouter, Route } from "react-router-dom";

import App from "../App";
import { PATHS } from "./paths";
import React from "react";

export function AppRouter() {
  return (
    <HashRouter>
      <Route exact path={PATHS.MAIN} key="main" component={App} />
    </HashRouter>
  );
}