
import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            message: "Welcome visitor", 
            greeting: this.props.greet
        }
    }

    newMessage() {
        this.setState({ message:"Thank you for subscribing"})
    }

    render() {
        return (
            <div>
                <h1>{this.state.message} </h1>
                <h2>{this.state.greeting}</h2> 

                <button onClick={this.newMessage.bind(this)} > click</button>          
                <button onClick={() => this.newMessage()} > click</button>          
            </div>
        )
    }
};
