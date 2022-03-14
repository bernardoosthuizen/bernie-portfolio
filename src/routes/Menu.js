/* MENU COMPONENT. 
Rendered once a "Terminal" command in START TERMINAL COMPONENT has been accepted.
Only visible on Desktop. 
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
   return (
    <div className="terminal-content" style={{overflow: 'scroll'}}>
        <h4>>  Please select a page:</h4>
        <nav>
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
        </nav>
        
    </div> 
   )};

export default Menu;