
import React, { Component } from 'react';


// class Welcome extends React.Component{
//     render() {
//         return(
//            <h1>Hello {this.props.name} - {this.props.heroName ? this.props.heroName : null}</h1>
//         );
//     }
// }

// export default Welcome

export default class Welcome extends Component{

    render() {
        console.log(this.props);
        return(

            <div>
                <h1>Hello {this.props.name} - {this.props.heroName ? this.props.heroName : null}</h1>
                {this.props.children}
            </div>
        );
    }
}