
// NEW

// import React from 'react'

// export default function List() {
//     const names =  ["Bruce", "Clark", "Diana"]
//     return (
//         <div>
//             <p>{names[0]}</p>
//             <p>{names[1]}</p>
//             <p>{names[2]}</p>
           
//         </div>
//     )
// }


// import React from 'react'

// export default function List() {
//     const names =  ["Bruce", "Clark", "Diana"]
//     return (
//         <div>
//             {names.map(name => <p key={name}>{name}</p>)}
            
//             {/*----------------*/}

//             <ul>
//                 {names.map(name => <li key={name} >{name}</li>)}
//             </ul>
            
//         </div>
//     )
// }


// import React from 'react'

// export default function List() {
//     const names =  ["Bruce", "Clark", "Diana"];
//     const nameList = names.map(name => <p key={name}>{name}</p>)
//     const nameList2 = names.map(name => <li key={name} >{name}</li>)
//     return (
//         <div> 
//             { nameList }

//             <ul> {nameList2}</ul>
            
//         </div>
//     )
// }


// import React from 'react'

// export default function List() {
//     const persons =  [
//          { id: 1, name: "Bruce", age: 30, skill: "React"}, 
//          { id: 2, name: "Clark", age: 28, skill: "Angular"}, 
//          { id: 3, name: "Diana", age: 25, skill: "Vue"}, 
//      ];

//     const personList = persons.map(person => <p key={person.id}>{person.name}, {person.skill}, { person.age}</p>)
//     const personList2 = persons.map(person => <li key={person.id}>{person.name}, {person.skill}, { person.age}</li>)
//     return (
//         <div> 
//             {personList} 
//             <ul>{personList2}</ul>
//         </div>
//     )
// }


import React from 'react'
import Persons from './Persons';

export default function List() {
    const persons =  [
         { id: 1, name: "Bruce", age: 30, skill: "React"}, 
         { id: 2, name: "Clark", age: 28, skill: "Angular"}, 
         { id: 3, name: "Diana", age: 25, skill: "Vue"}, 
     ];

    const personList = persons.map(person => <Persons key={person.id} person={person}/>)
    const personList2 = persons.map(person => <li key={person.id}>{person.name}, {person.skill}, { person.age}</li>)


    return (
        <div> 
            {personList} 

            {/* <ul>{personList2}</ul> */}
            
        </div>
    )
}
