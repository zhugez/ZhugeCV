import React from "react";

export default function About() {
  return (
    <div>
      <div className="card hoverable">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I'm a cybersecurity researcher. My dream is to be a red teamer.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Ho Chi Minh City
              </p>
              <p>
                <strong>Email:</strong> dezzhuge@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0367 394 612
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Blog:</strong> -{" "}
                <a href=" https://ly-ngoc-vu.gitbook.io/home/">
                  <i>ly-ngoc-vu.gitbook.io/home/</i>
                </a>
              </p>
              <p>
                <strong>Interest:</strong> - Computer hacking, foreign language,
                music,books.
              </p>
              <p>
                <strong>Quotes: </strong>{" "}
                <blockquote>
                  {" "}
                  - Knowledge is like a fire, the more it is shared, the more it
                  burns!
                </blockquote>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
