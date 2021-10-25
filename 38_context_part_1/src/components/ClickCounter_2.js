import React, { Component } from 'react'

export class ClickCounterTwo extends Component {    
    
    render() {
        const { count } = this.state;
        return (
            <button onClick={this.incrementCount}> 
                Clicked {count} times
            </button>
        )
    }
}

export default ClickCounterTwo;
