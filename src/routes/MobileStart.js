import React from "react";
import { Link } from "react-router-dom";
import Headshot from "../assets/headshot.png"

const MobileStart = () => {
    return (
        <article className="terminal-content">
            <div className="mobile-start">
                <div className="headshot">
                 <img src={ Headshot } alt="Pixel art headshot of Bernie" />
                </div>
                <menu>
                    <ul>
                    <li >
                        <Link to="/about" className="menu-item"> ABOUT ME </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="menu-item"> PROJECTS </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="menu-item"> CONTACT </Link>
                    </li>
                </ul>
                </menu>
                
            </div>
            
        </article>
    );
}

export default MobileStart;