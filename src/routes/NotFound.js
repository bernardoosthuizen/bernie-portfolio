import React from "react";

const NotFound = () => {
    return (
        <article className="terminal-content">
            <h3>PAGE NOT FOUND ~ </h3>
            <div className="about-container" style={{overflow: 'hidden'}}>
                <div className="404" style={{overflow: 'auto'}}>
                    <p>
                    The page you requested was not found. Please try again. 
                    </p>
                    <p>
                    If you believe you are viewing this page in error, please add a new Github issue <a href="https://github.com/bernardoosthuizen/bernie-portfolio/issues" style={{textDecoration: 'underline'}}> here</a>. 
                    </p>
                </div>
                
            </div>
            
        </article>
    );
}

export default NotFound;