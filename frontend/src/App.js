import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Customizer from './Customizer.js'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Customizer />
          </Route>
        </Switch>
    </Router>
  );
}
