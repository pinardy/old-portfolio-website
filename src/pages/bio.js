import React from "react";

import styles from './index.module.css';
import FadeIn from '../utils/fade-in';
import { rhythm } from "../utils/typography";
import Link from "gatsby-link"


export default ({ data }) => {
  console.log(data);
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
      <h1> Bio </h1>

      <p> Based in Singapore, I am major in Information Systems Technology 
        and Design (ISTD) in Singapore University of Technology and Design (SUTD).
        I build a wide range of lorem ipsum yeyey. </p>
        
      <p> I also make audio/visual art by using Processing(Java), 
        C++ and Javascript, currently working on research of Tangible Web 
        and Art Therapy studies. </p>

      <h3> Technical & Scientific Background </h3>
      <p> TEXT </p>

      <h3> Enthusiasm for Interdisciplinary Research </h3>
      <p> TEXT </p>

      <h3> Musical Soul </h3>
      <p> TEXT </p>

      <h3> Live Performance </h3>
      <p> TEXT </p>

      <h3> Spirit of Maker </h3>
      <p> TEXT </p>

        
    </div>

    </FadeIn>
  );
};