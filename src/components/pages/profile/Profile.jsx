import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../../../images/avatar.jpg";
export default function Profile() {
  return (
    <div>
      <div className="card z-depth-4">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="ZhugeZ" />
          <Link
            to=""
            className="btn-floating halfway-fab waves-effect waves-light deep-orange accent-3 pulse"
          >
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Ly Ngoc Vu
          </span>
          <p>Cybersecurity Researcher</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            <a
              href="https://facebook.com/dezzhu.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-facebook-f grey-text text-darken-4 social_style" />
            </a>
            <i className="fab fa-twitter grey-text text-darken-4 social_style" />
            <a
              href="https://github.com/zhugez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github grey-text text-dark" />
            </a>
            <a
              href="https://instagram.com/zyueyingz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-instagram grey-text text-darken-4 social_style" />{" "}
            </a>
            <a
              href="https://pinterest.com/lyngocvuteakwondo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-pinterest-p grey-text text-darken-4 social_style" />{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
