/* 
- handle props send to individual component from App.js
- handle other parameters than component parameter send to HOC  

*/

import React from "react";

const withCounter = (WrapComponent, incrementNumber = 1) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      console.log(this.props.name);
      return (
        <WrapComponent
          name={"Daniel"}
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

// NOTE: All components receive a different state form UpdatedComponent
