import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="indigo accent-3 sticky">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo flow-text">
                ZhugeZ
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/#home">
                    <i className="fas fa-home" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="#skills">
                    <i className="fas fa-copy" /> Skills
                  </Link>
                </li>
                <li>
                  <Link to="#experience">
                    <i className="fas fa-id-badge" /> Experience
                  </Link>
                </li>
                <li>
                  <Link to="#educations">
                    <i className="fas fa-graduation-cap" /> Educations
                  </Link>
                </li>
                <li>
                  <Link to="#achievements">
                    <i className="fas fa-address-card" /> Achievements
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link to="#101">
              <i className="fas fa-copy" /> Skills
            </Link>
          </li>
          <li>
            <Link to="#102">
              <i className="fas fa-id-badge" /> Experiences
            </Link>
          </li>
          <li>
            <Link to="#103">
              <i className="fas fa-graduation-cap" /> Educations
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <i className="fas fa-address-card" /> Portfolios
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
