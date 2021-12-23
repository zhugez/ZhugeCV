import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Skills from "./components/pages/skills/Skills.jsx";
import Experiences from "./components/pages/experience/Experience.jsx";
import Educations from "./components/pages/educations/Educations.jsx";
import Achievements from "./components/pages/achievements/Achievements.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/achievements" component={Achievements} />
        </Switch>
      </>
    </Router>
  );
}
