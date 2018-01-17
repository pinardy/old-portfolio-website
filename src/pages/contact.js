import React from "react";
import FadeIn from '../utils/fade-in';

import mailIcon from '../assets/images/mail.png';


export default () => (
  <div>
    <FadeIn
      x={{
					start: 40,
					end: 0,
					stiffness: 70,
					damping: 20,
				}}
    >
    <h1>Contact</h1>
    <h3>If you are interested to converse with me, feel free to drop me an email!</h3>
    
    <p>
    <img src={mailIcon} alt="mailIcon" />
         pinardy_yang [at] mymail [dot] sutd [dot] edu [dot] sg
    </p>

    </FadeIn>
  </div>
);