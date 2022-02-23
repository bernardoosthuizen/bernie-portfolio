/* START TERMINAL COMPONENT. 
Terminal like page rendered on root / that accepts a command "init" to display MENU COMPONENT.
Only visible on Desktop. 
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import {React, useState} from 'react';
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
    };
        
    return (
    <div className="terminal-content">
        <h4>>  Welcome to my homepage. Type "init" and hit enter to start.</h4>
        <form className="form" onSubmit={HandleSubmit}> 
         <div>
             <label >> </label>
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