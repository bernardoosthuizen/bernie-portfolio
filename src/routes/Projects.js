import { React, useState, useEffect } from "react";
import Headshot from "../assets/headshot.png";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ComponentLoader from './ComponentLoader';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const projectsCollectionRef = collection(db, "projects")

    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        const getProjects = async () => {
            const data = await getDocs(projectsCollectionRef);
            setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setLoaded(true);
        }

        getProjects()
    },[])


    return (
        <article className="terminal-content">
            <h3>PROJECTS ~ </h3>
            {loaded ? (
                <div className="all-projects-container" style={{overflow: 'scroll'}}>
                    
                    {projects.map((projects) => {
                        return (
                        <div className="projects-item" key={projects.id}>
                            <div className="project-img">
                                <img src={Headshot} alt="Pixel art of Bernie's headshot" />
                            </div>
                            <div className="project-description">
                                <h4 >{projects.name}</h4>
                            </div>
                            <div className="tag-wrapper">
                                { projects.tags.map((tags, index) => {
                                    return (
                                        <h5 key={index}>{tags}</h5>
                                    );
                                })}      
                            </div>
                        </div> 
                        );
                    })} 
                </div>
            ) : (
                <ComponentLoader />
            )}
            
        </article>
    )
}

export default Projects