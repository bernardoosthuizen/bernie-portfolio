/* WINDOW COMPONENT. 
Arranges window asthetics and header. 
This component is visible on all routes except /explore.
All pages content are rendered into the component (dependent on url) */

import React from 'react';
import Draggable from "react-draggable";
import { Link, Outlet } from "react-router-dom";

// Image imports
import CloseButton from "../assets/close.svg"
import Banner from "../assets/banner.svg"


const Window = () => {
       return (
       <div className="window-container">
              <Draggable
              handle=".handle"
              cancel=".no-handle"
              >
                     <header>
                           <div className="terminal-window">
                            <div className="window-top-bar handle">
                            <Link to="/explore" className="window-exit-button no-handle">
                                          <img src={CloseButton} alt="Close button" /> 
                            </Link> 
                            </div>
                            <div className="window-top">
                                   <div>
                                   <img src={Banner} alt="ASCII Bernie Oosthuizen banner" /> 
                                   </div>
                                   <div> 
                                          <h3>Software & Blockchain Engineer</h3>
                                   </div>
                            </div>
                            {/* Pages are rendered to this <Outlet> */}
                            <Outlet />                
                     </div> 
                     </header> 
              </Draggable>
       </div>
       )
}

       
            
export default Window;
