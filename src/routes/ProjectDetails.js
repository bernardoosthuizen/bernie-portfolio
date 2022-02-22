import React, { useState }from "react";
import { Navigate, useParams } from "react-router-dom";
import ComponentLoader from "./ComponentLoader";
import projectList from "../projects.json";

const ProjectDetails = () => {
    const [loaded, setLoaded] = useState(false)
    const {id} = useParams();
    const  validId = parseInt(id)

    if (!validId) {
        return <Navigate to="/404" />
    }
    
    let fetchedProject = {};
    projectList.forEach((project, i) => {
        if (validId === project.id) {
            fetchedProject.title = project.title;
            fetchedProject.img = project.img;
            fetchedProject.alt = project.alt;
            fetchedProject.tags = project.tags;
            fetchedProject.description = project.description;
            fetchedProject.github = project.github;
            fetchedProject.link = project.link;
        }
    })
   
    return (
        <article className="terminal-content">
            <h3>PROJECT DETAILS ~ </h3>
            <div className={loaded ? 'hideLoader' : 'visible'}>
                 <ComponentLoader />
            </div>
            <div className={loaded ? 'project-detail visible' : 'hidden'} >
                    <div className="project-detail-container" style={{overflow: 'auto'}}>
                        <div className="project-header" >
                            <a href={fetchedProject.link} target="_blank" rel="noreferrer">
                                <h4>{fetchedProject.title}</h4>
                            </a> 
                            <div className="tag-wrapper">
                                { fetchedProject.tags.map((tag, i) => {
                                    return (
                                        <p key={i} > { tag } </p>
                                    );
                                })}   
                            </div> 
                            <div className="project-detail-description" >
                        <h5>Project Description</h5>
                        <p>{fetchedProject.description}</p>
                        <a href={fetchedProject.github} style={{textDecoration: 'underline', fontSize: '14px'}}> View on Github</a>
                    </div>                          
                        </div>
                            <a href={fetchedProject.link}>
                                <div className="project-image-container">
                                    <img src={fetchedProject.img} alt={fetchedProject.alt} onLoad={()=> setLoaded(true)}/>
                                </div>
                            </a>
                    </div>
                    
                    
                
                
            </div>
            
        </article>
    );
}

export default ProjectDetails;