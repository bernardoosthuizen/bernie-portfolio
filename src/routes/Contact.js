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
                        <a href="tel:+85265337319"> +852 6533 7319 </a>
                    </div>
                    <div className="contact-item">
                        <a href="mailto:bernard.oosthuizen@gmail.com?subject=Software Project Enquiry"> bernard.oosthuizen@gmail.com </a>
                    </div>
                </div>
                <div className="social-card">
                    <a href="https://github.com/bernardoosthuizen" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/bernard-oosthuizen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://polywork.bernie.codes/" target="_blank" rel="noopener noreferrer">Polywork</a>
                </div>
            </div>
        </address>
    );
}

export default Contact;