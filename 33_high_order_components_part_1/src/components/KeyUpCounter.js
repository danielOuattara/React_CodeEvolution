import React, { Component } from 'react'

export class KeyUpCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        // this.setState( {count : this.state.count + 1  }) // OK ! Why not use this one

        this.setState( prevState => {
            return { count: prevState.count + 1}
        })
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <input type="text" onKeyUp={this.incrementCount} />
                <span> Keyup :  {count} times</span>
            </div>
        );
    }
}

export default KeyUpCounter;
