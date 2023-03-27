//
//-------------------------------------- using arrow function notation

// import React from "react";

// const withCounter = (WrapComponent) => {
//   class WithCounter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0,
//       };
//     }

//     incrementCount = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };

//     render() {
//       return (
//         <WrapComponent
//           name={"Daniel"}
//           count={this.state.count}
//           incrementCount={this.incrementCount}
//         />
//       );
//     }
//   }
//   return WithCounter;
// };

// export default withCounter;

// // NOTE: All components receive a different state form UpdatedComponent

//-------------------------------------- using regular function notation

import React from "react";

export default function withCounter(WrapComponent) {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <WrapComponent
          name={"Daniel"}
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
}

// NOTE: All components receive a different state form UpdatedComponent
