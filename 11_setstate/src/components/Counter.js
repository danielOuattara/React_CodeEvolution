import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    onIncrement() {
        this.setState(
            { count: this.state.count + 1},
            () => console.log(this.state.count)
        )
        console.log(this.state.count) // do not place callback here !
    }
    
    onIncrementByFive() { // don't do this to increment by five independant calls
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
        this.onIncrement()
    }

    onIncrement2() {  // do this to increment by five on 5 separate times
        this.setState( 
            (prevState, props) => ({
                count: prevState.count + 1
            })
            , 
            () => console.log(this.state.count)
        )
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
                <span> Count  =  {this.state.count} </span> 
                <button onClick={this.onIncrement.bind(this)}>Increment</button>
                <button onClick={() => this.onIncrement()}>Increment</button>

                <hr />

                <button onClick={this.onIncrementByFive.bind(this)}>Increment by 5: Not working</button>
                <button onClick={() => this.onIncrementByFive()}>Increment by 5: Not working</button>

                <hr />

                <button onClick={this.onIncrementByFive2.bind(this)}>Incrementby 5: OK</button>
                <button onClick={() => this.onIncrementByFive2()}>Increment by 5: OK</button>
            </div>
        )
    }
}
