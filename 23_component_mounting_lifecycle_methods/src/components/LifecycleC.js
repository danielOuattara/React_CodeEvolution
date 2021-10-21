
import React, { Component } from 'react'

export default class LifecycleC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Daniel",
        }
        console.log(" Lifecycle C : constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(" Lifecycle C : getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle C : componentDidMount")
    }
    
    render() {
        console.log(" Lifecycle C : render")
        return (
            <div> LifeCycle C</div>
        )
    }
}
