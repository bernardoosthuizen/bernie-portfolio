import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Media from "react-media";
import reportWebVitals from './reportWebVitals';

//CSS import
import './index.css';

// PAGES import
import PageLoader from './routes/PageLoader';
import Desktop from './routes/Desktop';
import Window from './routes/Window';
import StartTerminal from './routes/StartTerminal';
import Menu from './routes/Menu';
import MobileStart from './routes/MobileStart';
import ComponentLoader from './routes/ComponentLoader';

// Dynamic import
const Contact = lazy(() => import('./routes/Contact'));
const Projects = lazy(() => import('./routes/Projects'));
const About = lazy(() => import('./routes/About'));
const ProjectDetails = lazy(() => import('./routes/ProjectDetails'));
const NotFound = lazy (() => import('./routes/NotFound'));


ReactDOM.render(
        <Media query="(max-width: 1124px)">
          {matches => matches ? (
            // TABLET & MOBILE
            <Router>
              <Suspense fallback={PageLoader} >
              <Routes>
                <Route path="/" element={<Window />} >
                  <Route path="/" element={<MobileStart />} />
                  <Route path="loader" element={<ComponentLoader />} />
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="projectdetails/:id" element={<ProjectDetails />}/>
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="explore" element={<Desktop />} />
                <Route path="loader2" element={<PageLoader />} />
              </Routes>
              </ Suspense>
            </Router> 
            ) : (
              // DESKTOP
                <Router>
                  <Suspense fallback={PageLoader} >
                  <Routes>
                    <Route path="/" element={<Desktop />}> 
                      <Route path="/" element={<Window />} >
                        <Route path="/" element={<StartTerminal />} />
                        <Route path="loader" element={<ComponentLoader />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects/" element={<Projects />} />
                        <Route path="projectdetails/:id" element={<ProjectDetails />}/>
                        <Route path="contact" element={<Contact />} />
                        <Route path="404" element={<NotFound />} />
                      </Route>
                    </Route>
                    <Route path="explore" element={<Desktop />} />
                    <Route path="loader2" element={<PageLoader />} />
                  </Routes>
                  </ Suspense>
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
