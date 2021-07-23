import './App.css';
import { Greet } from "./components/Greet";
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">

      <Greet name={"Danny Boy"} heroName={"The King"}>
        <p>This is children paragraph</p>
      </Greet>
      <Greet name={"John Doe"}>
        <button>Click to meet John</button>
      </Greet>
      <Greet name={"Diana Spincer"} heroName={"The Princess"}/>
      <hr />

      <Welcome name={"Danny Boy"} heroName={"The King"}/>

      <Message />

    </div>
  );
}

export default App;
