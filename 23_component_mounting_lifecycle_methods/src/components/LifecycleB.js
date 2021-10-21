
import React, { Component } from 'react'
import LifecycleC from './LifecycleC'

export default class LifecycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name: "Daniel",
        }
        console.log(" Lifecycle B :  constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log(" Lifecycle B :  getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle B : componentDidMount");
    }
    
    render() {
        console.log(" Lifecycle B : render")
        return (
            <div> 
                LifeCycle B
                <LifecycleC />
            </div>
        )
    }
}
