import React from "react";

import FadeIn from "../utils/fade-in";

export default () => {
  return (
    <FadeIn
      x={{
        start: 40,
        end: 0,
        stiffness: 70,
        damping: 20,
      }}
    >
      <div>
        <h2> Bio </h2>
        <p>
          I graduated with a major in Information Systems Technology and Design
          from Singapore University of Technology and Design (SUTD).
        </p>

        <p>
          I am an independent learner who is highly motivated to learn and try
          out new technologies. I believe in livelong learning.
        </p>

        <h3> Technical Background </h3>
        <p>
          I started programming in 2016 in university. I have been exposed to
          many different fields such as web development, data science,
          internet-of-things and more. I have been working as a full-stack web developer.
        </p>

        <h3> Music </h3>
        <p>
          Music has always been a part of me from young. I started learning the
          piano from young and joined the chinese orchestra in my middle and
          high school. I started learning the violin on my own in 2021 and have been
          playing the violin leisurely in my free time.
        </p>

        <h3> Sports </h3>
        <p>
          I believe fitness is a lifestyle to keep myself healthy.
          I jog and swim regularly to keep myself fit. I enjoy playing badminton as well!
        </p>

        <h3> Gamer </h3>
        <p>
          I love playing games, as they actively challenge me to think and
          strategize. One of my favourite games is Dota, which is best enjoyed with friends!
        </p>
      </div>
    </FadeIn>
  );
};
