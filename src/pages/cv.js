import React from "react";
import FadeIn from "../utils/fade-in";

export default () => (
  <div>
    <FadeIn
      x={{
        start: 40,
        end: 0,
        stiffness: 70,
        damping: 20
      }}
    >
      <h2>C.V.</h2>

      <p>
        To view my resume, click
        <a
          href="https://drive.google.com/open?id=1KrVutxSalZXgjw2om0KeXQAX8AJgDg8l"
          target="_blank"
        >
          {" here "}
        </a>
      </p>

      <h4>If you would like to contact me, feel free to drop me an email!</h4>

      <p>pinardy [at] hotmail [dot] com</p>
    </FadeIn>
  </div>
);
