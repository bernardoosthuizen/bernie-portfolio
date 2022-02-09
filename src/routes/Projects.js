import React from "react";

const Projects = () => {
    return (
        <article className="terminal-content">
            <h3>PROJECTS ~ </h3>
            <div style={{overflow: 'scroll'}}>
                <h4>Recently updated</h4>
            <div className="featured-projects-container">
               <ProjectItem /> 
               <ProjectItem /> 
            </div>
            <h4>All</h4>
            <div className="all-projects-container">

            </div>
            </div>
            
        </article>
    )
}

const ProjectItem = () => {
    return (
        <div className="featured-projects-item">
            <h4>hello world
            </h4>
        </div>
            
        
    )
}

export default Projects