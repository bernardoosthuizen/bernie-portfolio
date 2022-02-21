import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ComponentLoader from "./ComponentLoader";
import Headshot from "../assets/headshot.png"

const About = () => {
    const [loaded, setLoaded] = useState(false)
    return (
        <article className="terminal-content">
            <h3>ABOUT ME ~ </h3>
            <div className={loaded ? 'hideLoader' : 'visible'}>
                <ComponentLoader />
            </div>
            <div className={loaded ? 'about-container visible' : 'hidden'} style={{overflow: 'hidden'}}>
                <div className="about-paragraph" style={{overflow: 'auto'}}>
                    <p>
                    Hi!
                    </p>
                    <p> 
                    Nice to meet you! I'm Bernie, a backend developer curious about all things blockchain & software. 
                    </p>
                    <p> 
                    I was born in South Africa, currently living in Hong Kong where I spend my days fiddling, researching & prototyping products. Currently I am working on a cryptocurrency tipping platform for creators and a tradintion SaaS product for business aviation organisations.  
                    </p>
                    <p>
                    I am working towards completing a Bachelor of Science in Computer Science after a successful career in aviation. I have previously led multi-cultural teams and assisted in projects automating tasks and processes. 
                    </p>
                    <p>
                    I would love to get involved with your project. The bigger the challenge the better! 
                    </p>
                    <p>
                        <Link to="/contact" className="menu-item" > &gt; Let's chat. </Link>
                    </p>
                </div>
                <div className="headshot no-mobile">
                    <img src={ Headshot } alt="Pixel art headshot of Bernie" onLoad={()=> setLoaded(true)} />
                </div>
            </div>
            
        </article>
    );
}

export default About;