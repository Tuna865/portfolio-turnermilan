import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "../src/components/Home/home"
import Portfolio from "../src/components/Portfolio/portfolio"
import About from "../src/components/About/about"

function App() {
  return (
    <div className="App">
      <Router>
            <nav>
              <h1>Turner Milan</h1>
              <ul className="page-links">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/home">
                <About />
              </Route>
              <Route path="/about">
              </Route>
            </Switch>
      </Router>
      <footer>
        <a href= "https://www.linkedin.com/in/turner-milan/">
            <img className= "social-links" src= "https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" alt="linkedin logo"/> 
        </a>
        <a href= "https://github.com/Tuna865">
            <img className="social-links" src= "https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo"/>
        </a>
        <a href= "https://open.spotify.com/user/1297311412?si=245311b0f2154fca">
            <img className="social-links" src= "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="spotify logo"/>
        </a>
      </footer>
    </div>
  );
}

export default App;
