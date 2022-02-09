import React from "react";
import Headshot from "../assets/headshot.png"


const Projects = () => {
    return (
        <article className="terminal-content">
            <h3>PROJECTS ~ </h3>
            <div className="all-projects-container" style={{overflow: 'scroll'}}>
                <ProjectItem /> 
                <ProjectItem /> 
                <ProjectItem /> 
            </div>
        </article>
    )
}

const ProjectItem = () => {
    return (
        <div className="projects-item">
           <div className="project-img">
            <img src={Headshot} alt="Pixel art of Bernie's headshot" />
           </div>
           <div className="project-description">
                <h4>My Portfolio Site</h4>
           </div>
           <div className="tag-wrapper">
                <h5> React.js</h5>
                <h5> Flexbox</h5>
                <h5> GoogleCloud</h5>
           </div>
        </div>
            
        
    )
}

export default Projects