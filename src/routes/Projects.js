/* PROJECTS COMPONENT. 
Renders component with a gallery view of all projects. 
When a project is clicked it opens a PROJECT DETAILS COMPONENT of relevent project.
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import React, { useState, Suspense } from 'react';
import ComponentLoader from "./ComponentLoader";
import { Link } from "react-router-dom";
import projectList from "../projects.json";


const Projects = (props) => {
    // State to track when images are loaded for a better UX.
    const [loaded, setLoaded] = useState(false)

    return (
        <article className="terminal-content">
            <header>
                <h3>PROJECTS ~ </h3>
            </header>
            <Suspense fallback={<ComponentLoader />}>
                {/* only visible once images are loaded. Otherwise shows COMPONENT LOADER COMPONENT*/}
                <div className={loaded ? 'hideLoader' : 'visible'}>
                    <ComponentLoader />
                </div>
                <div className="all-projects-container" style={{overflow: 'scroll'}}>
                    {/* Maps over projects found in projects.json */}
                    {projectList.map((project, i) => { 
                        // Creates url with params to pass to PROJECT DETAIL COMPONENT.
                        const projectLink = "/projectdetails/" + project.id;
                        return (
                            <Link to={projectLink} key={project.id}>
                                <div className={loaded ? 'projects-item visible' : 'hidden'} key={project.id}>
                                    <div className="project-img">
                                        <img src={project.img} alt={project.alt} onLoad={()=> setLoaded(true)}/>
                                    </div>
                                    <div className="project-description">
                                        <h4 >{project.title}</h4>
                                        <p> Built with: </p>
                                    </div>
                                    <div className="tag-wrapper">
                                        { project.tags.map((tag, i) => {
                                            return (
                                                <h5 key={i} > { tag } </h5>
                                            );
                                        })}   
                                    </div>
                                </div> 
                            </Link>
                        );
                    })}
                </div>
            </Suspense>
        </article>
        
    )  
}

export default Projects