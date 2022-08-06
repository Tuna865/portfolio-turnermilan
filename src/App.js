import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
