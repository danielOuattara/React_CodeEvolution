
import React, { PureComponent } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

export default class ParentComp2 extends PureComponent {
    constructor(props) {
        super(props);
    
        this.state = {
             name: "Daniel"
        };
    }
    componentDidMount() {
        setInterval( () => {
            this.setState( {name: "Daniel"} );
        }, 2000);
    }
    
    render() {
        console.log(" ----- Parent Pure Component Render ------");
        return (
            <div>
                Parent Pure Component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}
