import './App.scss';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/Home/home"
import Portfolio from "./components/Portfolio/portfolio"
import About from "./components/About/about"
import Layout from "./components/Layout/layout"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About/>}/>
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
