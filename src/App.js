/* eslint-disable react/jsx-pascal-case */
import logo from './logo.svg';
import './App.css';
import App_C from "./App_C";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          usando algo de codigo <code>src/App.js</code> and save to reload.
        </p>

        <p>
        <App_C/>
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
