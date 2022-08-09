import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/components/Home/home"
import Portfolio from "../src/components/Portfolio/portfolio"
import About from "../src/components/About/about"
import Navbar from "../src/components/Navbar/navbar"

function App() {
  return (
    <div className="App">
        <header>
            <Navbar />
        </header>
        <main>
          <Home />
          <BrowserRouter>
              <Routes>
                <Route path="./components/About/about.js" element={<About/>}/>
                <Route path="./components/Portfolio/portfolio.js" element={<Portfolio/>}/>
              </Routes>
          </BrowserRouter>
        </main>
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
