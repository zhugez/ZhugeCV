import React from "react";

export default function Skills() {
  return (
    <>
      <div id="skills">
        <div className="card hoverable">
          <div className="card-content">
            <h6>
              <strong>HARD SKILLS</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>RE/PWN</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "79%" }} />
                </div>
              </div>
              <div className="col s6">
                <p>Crypto</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card hoverable">
          <div className="card-content">
            <h6>
              <strong>SOFT SKILLS</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p> UPPER INTERMEDIATE LEVEL IN ENGLISH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card hoverable">
          <div className="card-content">
            <h6>
              <strong>Programming languages</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>C/C++</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "89%" }} />
                </div>
              </div>
              <div className="col s6">
                <p>Assembly</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "97%" }} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>Python</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "90%" }} />
                </div>
              </div>
              <div className="col s6">
                <p>Reactjs/Nodejs</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "95%" }} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>C#/Winform</p>
                <div className="progress grey lighten-1">
                  <div className="determinate blue" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
