// NEW ! 
// rce
import React, { Component } from 'react'
export default class EventBind extends Component {
    constructor(props) { // rconst
        super(props);
        this.state = { message:"customer" };
        this.onHandleHello3 = this.onHandleHello3.bind(this); // binding 'this' keyword in the constructor
                                                              // this binding happens ONLY once !!!
    }

    onHandleHello() { // 1 & 2
        this.setState({ message: "Daniel"})
        console.log(this)
    }

    onHandleHello3() { // 3 : the method is binded to "this" in the constructor method only once
        this.setState({ message: "Daniel"})
        console.log(this)
    }

    onHandleHello4 = () => {  // 4 onHandleHello4 is a arrow function
        this.setState({ message:"Daniel"})
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <p> Hello {this.state.message}</p>

                <button onClick={this.onHandleHello.bind(this)}>Click</button> 
                {/* 1: AVOID: for performance on large scale application; component to re-render completly */}

                <button onClick={() => this.onHandleHello()}>Click</button> 
                {/* 2: using arrow function in the render method. AVOID */}

                <button onClick={this.onHandleHello3}>Click</button> 
                {/* 3 , recommanded by React */}

                <button onClick={this.onHandleHello4}>Click</button> 
                {/* 4 , recommanded by React */}
            </div>
        )
    }
}
