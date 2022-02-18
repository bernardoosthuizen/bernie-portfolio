import React, { useState, Suspense } from 'react';
import ComponentLoader from "./ComponentLoader";
import { Link } from "react-router-dom";
import projectList from "../projects.json";


const Projects = (props) => {
    const [loaded, setLoaded] = useState(false)
    console.log(props)
    return (
        <article className="terminal-content">
            <h3>PROJECTS ~ </h3>
            <Suspense fallback={<ComponentLoader />}>
            <div className={loaded ? 'hideLoader' : 'visible'}>
                    <ComponentLoader />
                </div>
                <div className="all-projects-container" style={{overflow: 'scroll'}}>
                    {projectList.map((project, i) => {  
                        const projectLink = "/projectdetails/" + project.id;
                        return (
                            <Link to={projectLink} >
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