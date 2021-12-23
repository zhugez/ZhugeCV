import React, { Component } from "react";
import Navbar from "../navbar/Navbar.jsx";
import Profile from "./profile/Profile.jsx";
import About from "./about/About.jsx";
import Skills from "./skills/Skills.jsx";
import Experiences from "./experience/Experience.jsx";
import Educations from "./educations/Educations.jsx";
import Achievements from "./achievements/Achievements.jsx";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s12 m3">
              <Profile />
            </div>
            <div className="col s12 m9">
              <About />
              <Skills />
              <Experiences />
              <Educations />
              <Achievements />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
