
import React from 'react';
import { UserComsumer } from './userContext';
import { PersonComsumer } from './personContext';

export default function ComponentC() {
    return (
        <div>
            Component D

            <UserComsumer>
                { (username) => <div>Hello {username}</div> }
            </UserComsumer>

            <PersonComsumer>
                { (person) => {
                const { name, age } = person;
                <div>
                    {/* <h2> Jolie {value}</h2> */}
                    <h2>{name} {age}</h2>
                </div> 
            }}
            </PersonComsumer>
                     
        </div>
    )
}
