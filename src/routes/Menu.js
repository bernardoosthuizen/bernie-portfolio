import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
   return (
    <div className="terminal-content" style={{overflow: 'scroll'}}>
        <h4>>  Please select a page:</h4>
        <ul>
            <li >
                <Link to="/about" className="menu-item"> ABOUT ME </Link>
            </li>
            <li >
                <Link to="/projects" className="menu-item" > PROJECTS </Link>
            </li>
            <li>
                <Link to="/contact" className="menu-item"> CONTACT </Link>
            </li>
        </ul>
    </div> 
   )};

export default Menu;