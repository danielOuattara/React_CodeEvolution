
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
    constructor(props) {
        super(props)
        this.state = {
             country: "England",
             gender: "Male",
        }
    }
    
    render() {
        const {name, heroName} = this.props; // destructuring props
        const {country, gender} = this.state; // destructuring state
        return(
            <div>
                <h1>Hello {name} - {heroName ? heroName : null}</h1>
                <p>He Lived in {country} - gender : {gender}</p>
            </div>

        );
    }
}