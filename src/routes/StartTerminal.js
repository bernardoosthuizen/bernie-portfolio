/* START TERMINAL COMPONENT. 
Terminal like page rendered on root / that accepts a command "init" to display MENU COMPONENT.
Only visible on Desktop. 
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import {React, useState} from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";

const StartTerminal = () => {
    // State used to display the typed command.
    const [command, setCommand] = useState(''); 
    // Takes care of changing routes.
    const navigate = useNavigate();

    // When user has typed a command and hit "enter/return" HandleSubmit function runs.
    const HandleSubmit =(e) => {
        e.preventDefault();
        if(command === "init") {
            navigate("/menu", { replace: true});
        }
        else {
            console.log('false')
        } 
    }
   
    return (
    <div className="terminal-content">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bernie Oosthuizen - Software Engineer | Blockchain Developer | Master of dad jokes</title>
            <meta property="og:title" content="Bernie - Software Engineer" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="http://bernie.codes/" />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/myportfolio-1843e.appspot.com/o/project-portfolio-banner.png?alt=media&token=41a6112e-69a3-4da4-975f-ad5d30e74763" />
            <meta property="og:description" content="A portfolio showcasing software engineering projects by Bernie Oosthuizen." />
            <meta property="twitter:title" content="Bernie - Software Engineer" />
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/myportfolio-1843e.appspot.com/o/project-portfolio-banner.png?alt=media&token=41a6112e-69a3-4da4-975f-ad5d30e74763" />
            <meta property="twitter:description" content="A portfolio showcasing software engineering projects by Bernie Oosthuizen." />
            <meta name="twitter:site" content="@berniecodes"/>
            <link rel="canonical" href="http://bernie.codes/" />
        </Helmet>
        <h4>>  Welcome to my homepage. Type "init" and hit enter to start.</h4>
        <form className="form" onSubmit={HandleSubmit}> 
         <div>
             <label >&gt; </label>
             {/* input field that accepts commands typed by user */}
             <input 
                type="text" 
                autoComplete="off"
                id="command" 
                name="command" 
                // uses state to receive command typed by user. updated in real time. 
                value={command}
                // Updates state to display typed command 
                onChange={(e)=> setCommand(e.target.value)} 
                autoFocus={true} 
                onBlur={({ target }) => target.focus()} 
            />
         </div>
        </form>
    </div>
    )};
export default StartTerminal;