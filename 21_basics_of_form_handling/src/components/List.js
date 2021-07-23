
// NEW


import React from 'react'
// import Persons from './Persons';

export default function List() {
    const names =  ["Bruce", "Clark", "Diana", "Bruce"];
    // const persons =  [
    //      { id: 1, name: "Bruce", age: 30, skill: "React"}, 
    //      { id: 2, name: "Clark", age: 28, skill: "Angular"}, 
    //      { id: 3, name: "Diana", age: 25, skill: "Vue"}, 
    //  ];

    const nameList = names.map((name, index) => <p key={index}> {index} - {name}</p>)
    // const personList2 = persons.map(person => <li key={person.id}>{person.name}, {person.skill}, { person.age}</li>)


    return (
        <div> 
            {nameList}             
        </div>
    )
}
