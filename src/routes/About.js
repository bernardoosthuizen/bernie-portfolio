/* ABOUT COMPONENT.  
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ComponentLoader from "./ComponentLoader";

// Image imports
import Headshot from "../assets/headshot.png";

const About = () => {
  // State to track when images are loaded for a better UX.
  const [loaded, setLoaded] = useState(false);
  return (
    <article className='terminal-content'>
      <header>
        <h3>ABOUT ME ~ </h3>
      </header>
      {/* only visible once images are loaded. Otherwise shows COMPONENT LOADER COMPONENT*/}
      <div className={loaded ? "hideLoader" : "visible"}>
        <ComponentLoader />
      </div>
      <div
        className={loaded ? "about-container visible" : "hidden"}
        style={{ overflow: "hidden" }}>
        <div className='about-paragraph'>
          <p>Hi!</p>
          <p>
            Nice to meet you! I'm Bernie, a Pilot and Software Engineer based in
            Hong Kong. When I'm not flying, I explore the intersection of
            aviation and technology to help organisations serve their customers
            better by building elegent data driven, cloud based solutions.
          </p>
          <p>
            I am currently working on{" "}
            <Link to='/projectdetails/3' className='menu-item'>
              Fly Privi
            </Link>
            , the world's first empty leg flight aggregator. This project has
            really challenged me as an engineer and exposed me to new
            frameworks, architectures and gotchas. A whole lot of gotchas! This
            project has sparked a fascination for data pipelines and cloud
            architeecture, so much so that I plan on persuing these fields after
            completing my Bachelor of Science in Computer Science.
          </p>
          <p>I would love to hear from you. </p>
          <p>
            <Link to='/contact' className='menu-item'>
              {" "}
              &gt; Let's connect.{" "}
            </Link>
          </p>
        </div>
        <div className='headshot'>
          <img
            src={Headshot}
            alt='Pixel art headshot of Bernie'
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </article>
  );
};

export default About;
