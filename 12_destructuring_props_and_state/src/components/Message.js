
import React, { Component } from 'react';

export default class Message extends Component {

    constructor() {
        super()
        this.state= {
            message: "visitor",    
        }
    }

    newMessage() {
        this.setState({ message:"super visitor"})

    }


    render() {
        return (
            <div>
                <h1>Welcome {this.state.message} </h1>      
                <button onClick={this.newMessage.bind(this)} > click</button>          
                <button onClick={() => this.newMessage()} > click</button>          
            </div>
        )
    }
};
