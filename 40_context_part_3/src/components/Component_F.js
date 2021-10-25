
import React from 'react'
import { UserComsumer } from './userContext'

export default function Component_F() {
    return (
        <div>
            <UserComsumer>
                { (username) => <div>Hello {username}</div> }
            </UserComsumer>
        </div>
    )
}
 