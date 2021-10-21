
import React, { Component } from 'react';

export default class RegularComp extends Component {
    render() {
        console.log(" Regular Component Render ");
        return (
            <div>
                Regular component : {this.props.name}
            </div>
        );
    }
};
