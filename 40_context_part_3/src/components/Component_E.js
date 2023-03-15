import React from "react";
import ComponentF from "./Component_F";
import { UserContext } from "./userContext";

class Component_E extends React.Component {
  render() {
    console.log(UserContext);
    return (
      <div>
        Component_ E says: {this.context}
        <ComponentF />
      </div>
    );
  }
}

// another way to consume the context
Component_E.contextType = UserContext;

export default Component_E;
