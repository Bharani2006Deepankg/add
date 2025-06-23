import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Welcome</h1>
       <input type="text" id="nameInput" placeholder="Type your name here" />
      <button id="btn"onclick="submitName()">Submit</button>
       <p id="output">Something
       </p>
    </div>
  );
}

export default App;