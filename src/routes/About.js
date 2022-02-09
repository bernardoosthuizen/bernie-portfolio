import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <article className="terminal-content">
            <h3>ABOUT ~ </h3>
            <div className="about-paragraph" style={{overflow: 'scroll'}}>
                <p>
                Hi!
                </p>
                <p> 
                 Nice to meet you! I'm Bernie Oosthuizen, a backend developer curious about all things blockchain and software. 
                </p>
                <p>
                I am working towards completing a Bachelor of Science in Computer Science after a successful career in aviation. The decision to upskill and future proof my skills stems from a curiosity about new technologies and an urge to challenge myself. I have previously led multi-cultural teams and assisted in projects automating tasks and processes. 
                </p>
                <p>
                I would love to get involved with your project. The bigger the challenge the better! 
                </p>
                <p>
                    <Link to="/contact" className="menu-item" > &gt; Let's chat. </Link>
                </p>
            </div>
        </article>
    );
}

export default About;