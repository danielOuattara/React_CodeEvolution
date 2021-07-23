import './App.css';
import FunctionComponentClick from "./components/FunctionComponentClick";
import ClassComponentClick from "./components/ClassComponentClick";

function App() {
  return (
    <div className="App">
      <FunctionComponentClick />
      <hr />
      <ClassComponentClick />
    </div>
  );
}

export default App;
