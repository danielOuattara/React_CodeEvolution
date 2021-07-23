import React, { Component } from 'react'

export default class ClassComponentClick extends Component {

    onClickHandler() {
        console.log("Hello");
    }


    render() {
        return (
            <div>
                <button onClick={this.onClickHandler} >Class Component Click</button>
                <button onClick={() => this.onClickHandler()} >Class Component Click</button>
                
            </div>
        )
    }
}
