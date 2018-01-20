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
          <p> 
            Based in Singapore, I am major in Information Systems Technology 
            and Design in Singapore University of Technology and Design (SUTD).
          </p>
        
          <p> 
            I am an independent learner who is highly motivated to learn and try out new technologies.
          </p>

      <h3> Technical Background </h3>
          <p> 
            I started programming when I entered into university. Although it has only been two years,
            I have been exposed to many different fields such as data science, internet-of-things, 
            app development, and more. I am always curious about the possibilities with technology.
            As I approach into my final year of studies at SUTD, I am focusing more on data science 
            and web development.
          </p>

      <h3> Musical Soul </h3>
          <p>  
            I started learning the piano when I was around 8 years old. I continued learning the piano, 
            and joined the chinese orchestra in my secondary school. I continued playing in the chinese orchestra
            in junior college, exposing myself to learn different instruments such as the yangqin, suona, sheng (pipes)
            and percussion instruments. In my own free time, I play the acoustic guitar as well.
          </p>

      <h3> Sports </h3>
          <p> 
            I enjoy playing badminton, and joined the badminton club in SUTD. I often aim to 
            play badminton at least once a week as my way to keep myself fit and healthy. 
          </p>

      <h3> Gamer </h3>
          <p> 
            I love playing games, as they actively challenge me to think and strategize. 
          </p>
            
          <p> 
            In games like Dota, I have to be able to maintain my composure and think of the 
            best course of action under very tight situations, while keeping an eye on other 
            elements of the game such as the enemy positions. 
          </p>
            
          <p> 
            In games like Hearthstone, I often 
            have to change my perspective of thinking from "what can I do now" to "what can my 
            opponent possibly do in the future". Games like these not only greatly entertain me,
            but keep my mind fit. 
          </p>
        
    </div>

    </FadeIn>
  );
};