import logo from './logo.svg';
import './App.css';
import {Greet} from './component/Greet';
import Test from './component/Test';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <Greet name= "Payal"><p>This is inner text</p></Greet>
        <Greet name= "Ritu"><button>Action</button></Greet>
        <Greet name= "Kanika"/>
        <Test name = "test1"/>
      </header>
    </div>
  );
}

export default App;
