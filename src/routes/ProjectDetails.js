import React from "react";
import { Navigate, useParams } from "react-router-dom";
import projectList from "../projects.json";

const ProjectDetails = () => {
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
            
        }
    })
   
    return (
        <article className="terminal-content">
            <h3>PROJECT DETAILS ~ {fetchedProject.title}</h3>
            <div className="about-container" style={{overflow: 'hidden'}}>
                <div className="about-paragraph" style={{overflow: 'auto'}}>
                    <p>
                    This is Project details
                    </p>
                    
                </div>
                
            </div>
            
        </article>
    );
}

export default ProjectDetails;