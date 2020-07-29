import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from "./components/pages/welcome";
import Travels from "./components/pages/travels";
import NewTravel from "./components/pages/travels/travel-new-form.js";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/travels" component={Travels} />
        <Route path="/newTravel" component={NewTravel} />
      </Switch>
    </BrowserRouter>
  );
}
