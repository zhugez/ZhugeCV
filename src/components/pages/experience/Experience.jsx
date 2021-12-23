import React from "react";

export default function Experiences() {
  return (
    <div id="experience">
      <div className="card hoverable">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Oct
                <strong> 2020</strong> -<strong>Now</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Insec lab</strong>
                </h6>
                <p>
                  Study the security problems and playing CTF. I'm keen on
                  RE/PWN.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
