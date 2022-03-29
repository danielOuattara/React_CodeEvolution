import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
             message:"customer"
        }

        this.onHandleHello3 = this.onHandleHello3.bind(this);
    }

    onHandleHello() { // 1 & 2
        this.setState({ message: "Daniel"})
        console.log(this)
    }

    onHandleHello3() { // 3 , regular function definition
        this.setState({ message: "Daniel"})
        console.log(this)
    }

    onHandleHello4 = () => {  // 4, arrow function definition
        this.setState({ message:"Daniel"})
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <p> Hello {this.state.message}</p>
                <button onClick={this.onHandleHello.bind(this)}>Click</button> 
                {/* 1: avoid for performance on large scale application */}

                <button onClick={() => this.onHandleHello()}>Click</button> {/* 2*/}

                <button onClick={this.onHandleHello3}>Click</button> 
                {/* 3 , recommanded by React */}

                <button onClick={this.onHandleHello4}>Click</button> 
                {/* 4 , recommanded by React */}
            </div>
        )
    }
}
