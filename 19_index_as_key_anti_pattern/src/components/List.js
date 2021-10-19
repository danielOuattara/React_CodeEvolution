// NEW

import React from 'react'
// import Persons from './Persons';

export default function List() {
    const names =  ["Bruce", "Clark", "Diana", "Bruce"];
    const nameList = names.map((name, index) => <p key={index}> {index} - {name}</p>)

    return (
        <div> 
            {nameList}             
        </div>
    )
}
