/* CONTACT COMPONENT. 
Displays the /contact route. 
It is rendered into the <Outlet> of the WINDOW COMPONENT */
import React from "react";

const Contact = () => {
    return (
        <address className="terminal-content">
            <header>
                <h3>CONTACT ~ </h3>
            </header>
            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-item">
                        <a href="mailto:bernard.oosthuizen@gmail.com?subject=Howzit from bernie.codes"> bernard.oosthuizen@gmail.com </a>
                    </div>
                </div>
                <div className="social-card">
                    <a href="https://github.com/bernardoosthuizen" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/bernard-oosthuizen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </address>
    );
}

export default Contact;