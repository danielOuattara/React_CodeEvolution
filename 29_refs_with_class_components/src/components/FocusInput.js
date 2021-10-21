
import React, { Component } from 'react';
import Input from './Input';

export default class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    putFocus = () => {
        this.componentRef.current.focusInput()
        console.log(this.componentRef.current);
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.putFocus}> Focus Input</button>
            </div>
        )
    }
}

// The goal is to put focus on Input form here !