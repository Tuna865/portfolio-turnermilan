import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../src/components/Home/home"
import Portfolio from "../src/components/Portfolio/portfolio"
import About from "../src/components/About/about"
import Navbar from "../src/components/Navbar/navbar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Router>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
            </Router>
        </main>
    </div>
    </div>
  );
}

export default App;
