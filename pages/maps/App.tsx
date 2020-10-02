import React, { useEffect, useState } from "react";
import "./App.module.css";
import Map from "./Map/";
import { loadMapApi } from "./utils/GoogleMapsUtils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapView from "./mapview";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MapView} />
        </Switch>
        )
      </div>
    </Router>
  );
}

export default App;
