
import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.callBackRef = null;
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        }
        this.state = { }
    }

    componentDidMount() {

        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.callBackRef) {
            this.callBackRef.focus();
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    clickHandler2 = () => {
        alert(this.callBackRef.value);
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>click</button>
                <br /><br />
                <input type="text" ref={this.setCallBackRef} />
                <button onClick={this.clickHandler2}>click</button>
            </div>
        )
    }
}
