import React, { Component } from 'react'

export default class Class_Component extends Component {
    render() {
        // this.state= {name}
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}
