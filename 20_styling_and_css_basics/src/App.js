import './App.css';

// import { Greet } from "./components/Greet";
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from "./components/Counter";
// import FunctionComponentClick from "./components/FunctionComponentClick";
// import ClassComponentClick from "./components/ClassComponentClick";
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreetings from './components/UserGreetings';
// import List from './components/List';

import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';

import "./appStyle.css";
import styles from  "appStyle.module.css";

function App() {
  return (
    <div className="App">

      {/* <Greet name={"Danny Boy"} heroName={"The King"}>
        <p>This is children paragraph</p>
      </Greet> */}
      {/* <Greet name={"Diana Spincer"} heroName={"The Princess"}/> */}

      {/* <Welcome name={"Danny Boy"} heroName={"The King"}/> */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <FunctionComponentClick /> */}

      {/* <ClassComponentClick /> */}

      {/* <EventBind/> */}

      {/* <ParentComponent /> */}

      {/* <UserGreetings/> */}

      {/* <List /> */}

      <StyleSheet primary={false}/>
      <hr />
      <InlineStyle/>

      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Error</h1>

    </div>
  );
}

export default App;
