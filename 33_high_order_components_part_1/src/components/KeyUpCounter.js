import React, { Component } from "react";

export class KeyUpCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <input type="text" onKeyUp={this.incrementCount} />
        <span> Keyup : {count} times</span>
      </div>
    );
  }
}

export default KeyUpCounter;

/* Something Else Interesting: 
================================*/

// import React, { Component } from 'react'
// export class KeyUpCounter extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//             numberOfHit: 0
//         }
//     }

//     // method 1
//     incrementCount = () => {
//         this.setState( {count : this.state.count + 1  }) // OK ! Why not use this one
//         return this.state.count;
//     }

//     outputNumberOfHit = () => {
//         this.setState({numberOfHit: this.state.count})
//         return this.state.numberOfHit;

//     }

//     // method 2
//     // incrementCount = () => {
//     //     this.setState( prevState => {
//     //         let numberOfHit = { count: prevState.count + 1}
//     //         return numberOfHit
//     //     })
//     // }

//     render() {
//         // const {count} = this.state;
//         return (
//             <div>
//                 <input type="text" onKeyPress={this.incrementCount} onBlur={this.outputNumberOfHit} />
//                 <span> Keyup :  {this.state.numberOfHit} times</span>
//             </div>
//         );
//     }
// }

// export default KeyUpCounter;
