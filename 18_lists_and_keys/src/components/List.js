
import React from 'react'

export default function List() {
    const persons =  [
         { id: 1, name: "Bruce", age: 30, skill: "React"}, 
         { id: 2, name: "Clark", age: 28, skill: "Angular"}, 
         { id: 3, name: "Diana", age: 25, skill: "Vue"}, 
     ];

    const personList = persons.map(person => <p key={person.id}>{person.name}, {person.skill}, { person.age}</p>)
    const personList2 = persons.map(person => <li key={person.id}>{person.name}, {person.skill}, { person.age}</li>)
    return (
        <div> 
            {personList} 
            <ul>{personList2}</ul>
        </div>
    )
}

//-----------------------------------------------------------------------

// import React from 'react'
// import Persons from './Persons';

// export default function List() {
//     const persons =  [
//          { id: 1, name: "Bruce", age: 30, skill: "React"}, 
//          { id: 2, name: "Clark", age: 28, skill: "Angular"}, 
//          { id: 3, name: "Diana", age: 25, skill: "Vue"}, 
//      ];

//     const personList = persons.map(person => <Persons key={person.id} person={person}/>)
//     const personList2 = persons.map(person => <li key={person.id}>{person.name}, {person.skill}, { person.age}</li>)


//     return (
//         <div> 
//             {personList} 

//             {/* <ul>{personList2}</ul> */}
            
//         </div>
//     )
// }
