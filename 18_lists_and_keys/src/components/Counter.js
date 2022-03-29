import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onIncrement() {
        this.setState({ count: this.state.count + 1},
            () => console.log(this.state.count)
        )
        console.log(this.state.count) 
    }
    
    onIncrementByFive() {
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
    }

    onIncrement2() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => console.log(this.state.count))
    }

    onIncrementByFive2() {
        this.onIncrement2()
        this.onIncrement2()
        this.onIncrement2()
        this.onIncrement2()
        this.onIncrement2()
    }
    
    render() {
        return (
            <div>
                <span> Count  -  {this.state.count} </span> 
                <button onClick={this.onIncrement.bind(this)}>Increment</button>
                <button onClick={() => this.onIncrement()}>Increment</button>
                <hr />
                <button onClick={this.onIncrementByFive.bind(this)}>Increment</button>
                <button onClick={() => this.onIncrementByFive()}>Increment</button>
                <hr />
                <button onClick={this.onIncrementByFive2.bind(this)}>Increment</button>
                <button onClick={() => this.onIncrementByFive2()}>Increment</button>
            </div>
        )
    }
}
