import './App.css';

import StyleSheet from './components/StyleSheet';
import InlineStyle from './components/InlineStyle';
import ModuleStyle from './components/ModuleStyle';
import "./appStyle.css";
import styles from "./appStyle.module.css";

function App() {
  return (
    <div className="App">

      <StyleSheet primary={false} secondary={true}/>
      <hr />
      <InlineStyle/>
      <hr />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <ModuleStyle/>

    </div>
  );
}

export default App;
