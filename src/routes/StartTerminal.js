/* START TERMINAL COMPONENT. 
Terminal like page rendered on root / that accepts a command "init" to display MENU COMPONENT.
Only visible on Desktop. 
It is rendered into the <Outlet> of the WINDOW COMPONENT */

import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartTerminal = () => {
  // State used to display the typed command.
  const [command, setCommand] = useState("");

  // State used to determine if wrong command was used.
  const [attempt, setAttempt] = useState(0);

  // Takes care of changing routes.
  const navigate = useNavigate();

  // When user has typed a command and hit "enter/return" HandleSubmit function runs.
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (command === "init") {
      navigate("/menu", { replace: true });
    } else {
      // Clear the 'command line'.
      setCommand("");
      // Increment number of attempts when incorrect command is entered.
      setAttempt(attempt + 1);
    }
  };

  // Handle render logic if incorrect commands are entered.
  var tryAgain;
  if (attempt > 0) {
    tryAgain = [...Array(attempt)].map((e, i) => (
      <h4 key={i}>&gt; Unknown command. Please try again.</h4>
    ));
  }

  return (
    <div className='terminal-content'>
      <h4>&gt; Welcome to my homepage. Type "init" and hit enter to start.</h4>
      {tryAgain}
      <form className='form' onSubmit={HandleSubmit}>
        <div>
          <label for='command'>&gt; </label>
          {/* input field that accepts commands typed by user */}
          <input
            type='text'
            autoComplete='off'
            id='command'
            name='command'
            // uses state to receive command typed by user. updated in real time.
            value={command}
            // Updates state to display typed command
            onChange={(e) => setCommand(e.target.value)}
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
          />
        </div>
      </form>
    </div>
  );
};
export default StartTerminal;
