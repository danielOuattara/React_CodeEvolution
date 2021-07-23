
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Daniel",
        }
        console.log(" Lifecycle A :  constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(" Lifecycle A :  getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle A : Component did mount");
    }
    
    shouldComponentUpdate() {
        console.log("Lifecycle A : ShouldcomponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("Lifecycle A : getSnaptBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Lifecycle A : componentDidUpdate");
    }

    changeState = () => {
        this.setState({ name: "Ouattara"})
    }
    render() {
        console.log(" Lifecycle A : render")
        return (
            <div> 
                LifeCycle A
                <LifecycleB />
                <button onClick={this.changeState}> Change state</button>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}
