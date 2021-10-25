import React, { Component } from 'react'
import WithCounter from './withCounter'
export class ClickCounter extends Component {    
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}> 
                    {this.props.name} Clicked {this.props.count} times
                </button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter, 2);
