
import React from 'react'
import { UserComsumer } from './userContext'

export default function ComponentF() {
    return (
        <div>
            Component F
            <UserComsumer>
                { (username) => <div>Hello {username}</div> }
            </UserComsumer>
        </div>
    )
}
 