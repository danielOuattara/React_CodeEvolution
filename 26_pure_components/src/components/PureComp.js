import React, { PureComponent } from 'react'; // rpce

export default class PureComp extends PureComponent {
    render() {
        console.log(" Pure Component Render ");
        return (
            <div>
                Pure Component : {this.props.name}
            </div>
        );
    }
};
