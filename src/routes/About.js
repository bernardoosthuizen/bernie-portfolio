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
            <header>
                <h3>ABOUT ME ~ </h3>
            </header>
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
                    Nice to meet you! I'm Bernie, a Lead Software Engineer based in Hong Kong. 
                    </p>
                    <p> 
                    I work with an incredible team of creatives and developers. We create extaordinary digital experiences. My job is to enable my teammates to serve the customer better through implementing systems, tools and automations. My role also includes project and organisation wide strategic decision making and planning. I am fortunate to be able to practice my love of coding and hone my people skills on a daily basis. 
                    </p>
                    <p>
                    I have recently pivotted from a successful career in aviation, where I gained valuable transferable skills in leadership, communication, teamwork and problem-solving. I have a strong track record of fast learning and adapting in high-stress, operationally critical environments.
                    </p>
                    <p>
                    I would love to hear from you.  
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