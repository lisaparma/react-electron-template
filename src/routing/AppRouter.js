import { Route } from "react-router-dom";

import App from "../App";
import { PATHS } from "./paths";

export function AppRouter() {
  return [
    <Route exact path={PATHS.MAIN} key="main" component={App} />
  ];
}