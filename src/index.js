import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Media from "react-media";
import reportWebVitals from './reportWebVitals';

//CSS import
import './index.css';

// PAGES import
import Desktop from './routes/Desktop';
import Window from './routes/Window';
import StartTerminal from './routes/StartTerminal';
import Menu from './routes/Menu';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import MobileStart from './routes/MobileStart';



ReactDOM.render(
        <Media query="(max-width: 1024px)">
          {matches => matches ? (
            <Router>
              <Routes>
                <Route path="/" element={<Window />} >
                  <Route path="/" element={<MobileStart />} />
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="explore" element={<Desktop />} />
              </Routes>
            </Router> 
            ) : (
            <Router>
              <Routes>
                <Route path="/" element={<Desktop />}> 
                  <Route path="/" element={<Window />} >
                    <Route path="/" element={<StartTerminal />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                  </Route>
                </Route>
                <Route path="explore" element={<Desktop />} />
              </Routes>
            </Router> 
            )
          }
        </Media>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
