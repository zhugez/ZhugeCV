import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Educations() {
  return (
    <div id="educations ">
      <div className="card hoverable">
        <div className="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table className="striped">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Bachelor of Computer Science at Industrial University of Ho
                  Chi Minh
                </td>
                <td>Oct 2020 - Now</td>
                <td>
                  <Link to="/details" className="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
