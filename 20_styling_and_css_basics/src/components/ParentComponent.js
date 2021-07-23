
import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "parent"
        }

        this.greetParent = this.greetParent.bind(this)
        this.greetParent2 = this.greetParent2.bind(this)
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`)
    }
    
    greetParent2(childName) {
        alert(`Hello ${this.state.parentName} ${childName ? ` from ` + childName : ""}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greetParent} 
                                greetParent2={this.greetParent2} />
            </div>
        )
    }
}
