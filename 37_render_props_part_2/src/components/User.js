
import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                Julie
                <br />
                {this.props.name1}
                <br />
                {this.props.name2()}
                <br />
                {this.props.name3(true)}
                <br />
                {this.props.name3(false)}
                <br />
                {this.props.render(true)}
                <br />
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
