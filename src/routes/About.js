/* ABOUT COMPONENT.  
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ComponentLoader from "./ComponentLoader";

// Image imports
import Headshot from "../assets/headshot.png"

const About = () => {
    // State to track when images are loaded for a better UX.
    const [loaded, setLoaded] = useState(false)
    return (
        <article className="terminal-content">
            <h3>ABOUT ME ~ </h3>
            {/* only visible once images are loaded. Otherwise shows COMPONENT LOADER COMPONENT*/}
            <div className={loaded ? 'hideLoader' : 'visible'}>
                <ComponentLoader />
            </div>
            <div className={loaded ? 'about-container visible' : 'hidden'} style={{overflow: 'hidden'}}>
                <div className="about-paragraph">
                    <p>
                    Hi!
                    </p>
                    <p> 
                    Nice to meet you! I'm Bernie, an aspiring backend developer curious about all things software. 
                    </p>
                    <p> 
                    I was born in South Africa, currently living in Hong Kong where I spend my days fiddling, researching and working on my portfolio projects. Currently, I am working on designing a large scale cloud infrustructure and exploring its implementation with terraform.  
                    </p>
                    <p>
                    After a successful career in aviation, I have decided to pivot my career. I am working towards completing a Bachelor of Science in Computer Science. As a pilot, I am familiar with working in high-stress, operationally critical environments. My excellent communication and problem-solving skills will transfer well into the world of tech.  
                    </p>
                    <p>
                    I would love to get involved with your project. The bigger the challenge the better! 
                    </p>
                    <p>
                        <Link to="/contact" className="menu-item" > &gt; Let's chat. </Link>
                    </p>
                </div>
                <div className="headshot">
                    <img src={ Headshot } alt="Pixel art headshot of Bernie" onLoad={()=> setLoaded(true)} />
                </div>
            </div>
        </article>
    );
}

export default About;