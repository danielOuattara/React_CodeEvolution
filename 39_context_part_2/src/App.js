// import React, { Component } from "react";
// import "./App.css";
// import ComponentC from "./components/Component_C";
// import ComponentB from "./components/Component_B";
// import { UserProvider } from "./components/userContext";
// import { PersonProvider } from "./components/personContext";

// export default class App extends Component {
//   render() {
//     let person = {
//       name: "daniel ouattara",
//       age: 37,
//     };

//     return (
//       <div className="App">
//         <UserProvider value="Daniel">
//           <ComponentC />
//         </UserProvider>
//         <hr />

//         <UserProvider value="Gaia">
//           <ComponentB />
//         </UserProvider>
//         <hr />

//         <PersonProvider value={{ ...person }}>
//           <ComponentB />
//         </PersonProvider>
//       </div>
//     );
//   }
// }

//
//----------------------------------------------------------------------
//
import React, { Component } from "react";
import "./App.css";
import ComponentC from "./components/Component_C";
import ComponentB from "./components/Component_B";
import { UserProvider } from "./components/userContext";
import { PersonProvider } from "./components/personContext";

export default class App extends Component {
  render() {
    let person = {
      name: "daniel ouattara",
      age: 37,
    };

    return (
      <div className="App">
        <UserProvider value="Daniel">
          <ComponentC />
        </UserProvider>
        <hr />

        <UserProvider value="Gaia">
          <PersonProvider value={{ ...person }}>
            <ComponentB />
          </PersonProvider>
        </UserProvider>
      </div>
    );
  }
}
