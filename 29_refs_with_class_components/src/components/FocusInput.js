
import React, { Component } from 'react';
import Input from './Input';

export default class FocusInput extends Component {
    render() {
        return (
            <div>
                <Input />
                <button> Focus Input</button>
            </div>
        )
    }
}
