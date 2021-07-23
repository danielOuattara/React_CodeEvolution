
import React, { Component } from 'react'

export default class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Daniel",
        }
        console.log(" Lifecycle B : constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(" Lifecycle B : getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle B : Component did mount")
    }
    
    render() {
        console.log(" Lifecycle B : render")
        return (
            <div> LifeCycle B</div>
        )
    }
}
