import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";

const StartTerminal = () => {
    const [command, setCommand] = useState(''); 
    const navigate = useNavigate();

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
             <input 
                type="text" 
                autoComplete="off"
                id="command" 
                name="command" 
                value={command}
                onChange={(e)=> setCommand(e.target.value)} 
                autoFocus={true} 
                onBlur={({ target }) => target.focus()} 
            />
         </div>
        </form>
    </div>
    )};
export default StartTerminal;