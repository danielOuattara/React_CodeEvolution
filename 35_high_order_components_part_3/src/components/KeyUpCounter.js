import React, { Component } from 'react'
import WithCounter from './withCounter'
export class KeyUpCounter extends Component {
    render({name, count, incrementCount} = this.props) {
        return (
            <div>
                <input type="text" onKeyUp={incrementCount} />
                <span>{name} Keyup :  {count} times</span>
            </div>
        );
    }
}

export default WithCounter(KeyUpCounter, 1);
