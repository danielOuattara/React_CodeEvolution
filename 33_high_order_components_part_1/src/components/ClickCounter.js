import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // method 1
    // incrementCount = () => {
    //     return this.setState( {count : this.state.count + 1  }) // OK ! Why not use this one
    // }


    // method 2
    incrementCount = () => { 
        this.setState( prevState => {
            return { count: prevState.count + 1}
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default ClickCounter
