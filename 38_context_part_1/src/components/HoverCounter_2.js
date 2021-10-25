import React, { Component } from 'react';

export class HoverCounterTwo extends Component {    
    render() {
        const { count } = this.state;
        return (
            <div>
                <h3 onMouseOver={this.incrementCount}> 
                    Hovered {count} times
                </h3>
            </div>
        )
    }
}

export default HoverCounterTwo;
