import React from 'react';
import Draggable from "react-draggable";
import CloseButton from "../assets/close.svg"
import Banner from "../assets/banner.svg"
import { Link, Outlet } from "react-router-dom";




const Window = () => {

       return (
       <div className="window-container">
              <Draggable
              handle=".handle"
              cancel=".no-handle"
              >
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
                                   <Outlet />  
                                          
                     </div>
                     
              </Draggable>
       </div>
       )
}

       
            
export default Window;
