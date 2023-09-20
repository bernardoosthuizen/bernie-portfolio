/* WINDOW COMPONENT. 
Arranges window asthetics and header. 
This component is visible on all routes except /explore.
All pages content are rendered into the component (dependent on url) */

import React, { lazy } from "react";
import { Link, Outlet } from "react-router-dom";

// Image imports
import CloseButton from "../assets/close.svg";
import Banner from "../assets/banner.svg";

// Dynamic import
const Draggable = lazy(() => import("react-draggable"));

const Window = () => {
  return (
    <div className='window-container'>
      <Draggable handle='.handle' cancel='.no-handle'>
        <div className='terminal-window'>
          <div className='window-top-bar handle'>
            <Link to='/explore' className='window-exit-button no-handle'>
              <img src={CloseButton} alt='Close button' />
            </Link>
          </div>
          <header>
            <div className='window-top'>
              <div>
                <img src={Banner} alt='ASCII Bernie Oosthuizen banner' />
              </div>
              <div>
                <h3>Data | Cloud | Tinkering</h3>
              </div>
            </div>
          </header>

          {/* Pages are rendered to this <Outlet> */}
          <Outlet />
        </div>
      </Draggable>
    </div>
  );
};

export default Window;
