
import React, { Component } from 'react';

// export default Welcome

// class Welcome extends React.Component{
//     render() {
//         return(
//             <h1>Welcome</h1>
//         );
//     }
// }

// export default Welcome

export default class Welcome extends Component{
    render() {
        return(
            <h1>Hello {this.props.name} - {this.props.heroName ? this.props.heroName : null}</h1>
        );
    }
}