
import React, { Component } from 'react';

export default class LifecycleC extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name: "Daniel",
        }
        console.log(" Lifecycle C :  constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(" Lifecycle C :  getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Lifecycle C : ComponentDidMount");
    }
    
    shouldComponentUpdate() {
        console.log("Lifecycle C : ShouldcomponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("Lifecycle C : getSnaptBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("Lifecycle C : componentDidUpdate");
    }

    changeState = () => {
        this.setState({ name: "Ouattara"});
    }
    
    render() {
        console.log(" Lifecycle C : render");
        return (
            <div> 
                LifeCycle C
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}
