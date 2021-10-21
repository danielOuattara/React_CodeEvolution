
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
        console.log(" Lifecycle B :  getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle B : ComponentDidMount");
    }
    
    shouldComponentUpdate() {
        console.log("Lifecycle B : ShouldcomponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("Lifecycle B : getSnaptBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Lifecycle B : componentDidUpdate");
    }

    changeState = () => {
        this.setState({ name: "Ouattara"});
    }

    render() {
        console.log(" Lifecycle B : render")
        return (
            <div> 
                LifeCycle B
                <LifecycleC />
                <button onClick={this.changeState}> Change state</button>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}
