/* DESKTOP COMPONENT. 
Arranges and sorts the desktop icons. 
Always visible when viewed on Desktop.
Only visible on mobile and tablet on /explore route */

import React from "react";
import { Outlet, Link } from "react-router-dom";


// Image imports
import computerIcon from "../assets/computer-icon.png";
import projectsIcon from "../assets/projects-icon.png";
import aboutIcon from "../assets/about-me-icon.png";
import contactIcon from "../assets/contact-icon.png";

// Desktop Icons Array - Lists all desktop icons
const desktopIcons =[
    {
        id: 1,
        imgSrc: computerIcon,
        imgAltText: "Pixel art computer icon",
        iconText: "START.EXE",
        link: "/",
    },
    {
        id: 2,
        imgSrc: aboutIcon,
        imgAltText: "Pixel art hammer and wrench icon",
        iconText: "ABOUT_ME",
        link: "/about",
    },
    {
        id: 3,
        imgSrc: projectsIcon,
        imgAltText: "Pixel art folder icon",
        iconText: "PROJECTS",
        link: "/projects",
    },
    {
        id: 4,
        imgSrc: contactIcon,
        imgAltText: "Pixel art contact icon",
        iconText: "Contact",
        link: "/contact",
    },
]

function Desktop() { 
    return (
        <div className="main-container">
           {/* Icons */}
            <menu className="icons-container">
                {/* Maps over DesktopIcon array and passes each icon's name:value pairs to <Icon> component through props => resultin in a rendered icon */}
                {desktopIcons.map((desktopIcon) => {             
                    return <Icon  key={desktopIcon.id} {...desktopIcon} /> 
                })}
            </menu> 
            <Outlet />
        </div>
        
    )
}

const Icon = (props) => {
    //Receives a single icon's name:value pairs as props and renders it as an icon
    const {imgSrc, imgAltText, iconText, link} = props;
        return (
            <Link to={ link } className="icon text-link" >
                <div>
                    <img src={ imgSrc } alt={ imgAltText }/>
                </div>
                <div className={"icon-text"}>
                    <h4>{ iconText }</h4>
                </div>
            </Link> 
        );   
}
    

export default Desktop;