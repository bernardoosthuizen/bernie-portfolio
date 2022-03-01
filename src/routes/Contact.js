/* CONTACT COMPONENT. 
Displays the /contact route. 
It is rendered into the <Outlet> of the WINDOW COMPONENT */
import { Helmet } from 'react-helmet';

import React from "react";
const Contact = () => {
    return (
        <address className="terminal-content">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bernie Oosthuizen - Software Engineer | Blockchain Developer | Master of dad jokes</title>
                <meta property="og:title" content="Contact Bernie - Software Engineer" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://bernie.codes/contact" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/myportfolio-1843e.appspot.com/o/project-portfolio-banner.png?alt=media&token=41a6112e-69a3-4da4-975f-ad5d30e74763" />
                <meta property="og:description" content="A portfolio showcasing software engineering projects by Bernie Oosthuizen." />
                <meta property="twitter:title" content="Bernie - Software Engineer" />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/myportfolio-1843e.appspot.com/o/project-portfolio-banner.png?alt=media&token=41a6112e-69a3-4da4-975f-ad5d30e74763" />
                <meta property="twitter:description" content="A portfolio showcasing software engineering projects by Bernie Oosthuizen." />
                <meta name="twitter:site" content="@berniecodes"/>
                <link rel="canonical" href="http://bernie.codes/contact" />
        </Helmet>
            <header>
                <h3>CONTACT ~ </h3>
            </header>
            <div style={{overflow: 'scroll'}}>
                <div className="contact-card">
                    <div className="contact-item">
                        <a href="tel:+85265337319"> +852 6533 7319 </a>
                    </div>
                    <div className="contact-item">
                        <a href="mailto:bernard.oosthuizen@gmail.com?subject=Software Project Enquiry"> bernard.oosthuizen@gmail.com </a>
                    </div>
                </div>
                <div className="social-card">
                    <a href="https://github.com/bernardoosthuizen" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/bernard-oosthuizen/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://polywork.bernie.codes/" target="_blank" rel="noreferrer">Polywork</a>
                </div>
            </div>
        </address>
    );
}

export default Contact;