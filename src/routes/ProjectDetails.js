/* PROJECT DETAILS COMPONENT. 
Renders component with details of a project selected from PROJECT COMPONENT.
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import React, { useState }from "react";
import { Navigate, useParams } from "react-router-dom";
import ComponentLoader from "./ComponentLoader";
import projectList from "../projects.json";
import { Helmet } from "react-helmet";

const ProjectDetails = () => {
    // State to track when images are loaded for a better UX.
    const [loaded, setLoaded] = useState(false);
    // URL params used to fetch project ID.
    const {id} = useParams();
    // Checks if ID is valid.
    const  validId = parseInt(id);
    if (!validId) {
        return <Navigate to="/404" />
    }
    
    // Fetches details of project from projects.json. 
    let fetchedProject = {};
    projectList.forEach((project, i) => {
        if (validId === project.id) {
            fetchedProject.id = project.id;
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bernie Oosthuizen - Software Engineer | Blockchain Developer | Master of dad jokes</title>
                <meta property="og:title" content={fetchedProject.title} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="http://bernie.codes/projects/" />
                <meta property="og:image" content={fetchedProject.img} />
                <meta property="og:description" content={fetchedProject.description} />
                <meta property="twitter:title" content="Bernie - Software Engineer" />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:image" content={fetchedProject.img} />
                <meta property="twitter:description" content={fetchedProject.description} />
                <meta name="twitter:site" content="@berniecodes"/>
                <link rel="canonical" href="http://bernie.codes/" />
            </Helmet>
            <h3>PROJECT DETAILS ~ </h3>
            {/* only visible once images are loaded. Otherwise shows COMPONENT LOADER COMPONENT*/}
            <div className={loaded ? 'hideLoader' : 'visible'}>
                 <ComponentLoader />
            </div>
            <div className={loaded ? 'project-detail visible' : 'hidden'} style={{overflow: 'auto'}}>
                <div className="project-detail-container">
                    <div className="project-column-1">
                        <div className="project-header" >
                            <header>
                                <a href={fetchedProject.link} target="_blank" rel="noreferrer">
                                    <h4>{fetchedProject.title}</h4>
                                </a> 
                            </header>
                            <div className="tag-wrapper">
                                { fetchedProject.tags.map((tag, i) => {
                                    return (
                                        <p key={i} > { tag } </p>
                                    );
                                })}   
                            </div> 
                            <div className="project-detail-description" >
                                <h5>Project Description</h5>
                                <p>{fetchedProject.description} </p>
                                <a href={fetchedProject.github} style={{textDecoration: 'underline', fontSize: '14px'}}> View on Github</a>
                            </div>       
                        </div>
                    </div>  
                    <div className="project-column-2">
                        <div className="project-image-container">
                            <img src={fetchedProject.img} alt={fetchedProject.alt} onLoad={()=> setLoaded(true)}/>
                        </div> 
                    </div> 
                </div>  
            </div>
        </article>
    );
}

export default ProjectDetails;