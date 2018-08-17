import React from "react";
import FadeIn from '../utils/fade-in';

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
    <h1>C.V.</h1>

    <p>
      To view my resume, click 
      <a href="https://drive.google.com/open?id=1KZMX_ushXECJusNXt2eQya2TWNDt4l-5"> here </a>
    </p>

    <h4>
      If you would like to contact me, feel free to drop me an email!
    </h4>
    
    <p>
      pinardy_yang [at] mymail [dot] sutd [dot] edu [dot] sg
    </p>

    </FadeIn>
  </div>
);