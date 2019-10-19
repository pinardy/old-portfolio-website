import React from "react";

import styles from "./index.module.css";
import FadeIn from "../utils/fade-in";
import g from "glamorous";
import "./index.css";
import { rhythm } from "../utils/typography";

import displayPic from "../assets/images/displaypic.jpg";
import fbIcon from "../assets/images/fb-icon.svg";
import ghIcon from "../assets/images/gh-icon.svg";
import mdIcon from "../assets/images/medium-icon.svg";

export default ({ data }) => {
  console.log(data);
  return (
    <FadeIn
      x={{
        start: 40,
        end: 0,
        stiffness: 70,
        damping: 20
      }}
    >
      <div>
        <img src={displayPic} alt="displayPic" />
        <p>
          I am a software engineer who graduated from SUTD under the Information
          Systems and Design (ISTD) major. I am looking to improve myself in the
          areas of web development and software engineering.
        </p>
      </div>

      <div>
        <ul className={styles.snList}>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/pinardy.yang"
            >
              <img src={fbIcon} className={styles.snIcon} alt="fb-icon" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/pinardy"
            >
              <img src={ghIcon} className={styles.snIcon} alt="gh-icon" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@pinardy"
            >
              <img src={mdIcon} className={styles.snIcon} alt="medium-icon" />
            </a>
          </li>
        </ul>
      </div>
    </FadeIn>
  );
};
