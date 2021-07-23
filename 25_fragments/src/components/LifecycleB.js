
import React, { Component } from 'react';


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
        console.log("Lifecycle B : Component did mount")
    }

    shouldComponentUpdate() {
        console.log("Lifecycle B : ShouldcomponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("Lifecycle B : getSnaptBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("Lifecycle B : componentDidUpdate");
    }

    render() {
        console.log(" Lifecycle B : render")
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}
