
import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             name: "Daniel"
        };
    }
    // componentDidMount() {
    //     setInterval( () => {
    //         this.setState( {name: "Daniel"} );
    //     }, 2000);
    // }
    
    render() {
        console.log(" ----- Parent Component Render ------");
        return (
            <div>
                Parent Component Regular
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}
