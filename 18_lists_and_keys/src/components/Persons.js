
// import React from 'react'

// export default function Persons(props) {
//     return (
//         <div>
//             <li>{props.person.name}, {props.person.skill}, {props.person.age}</li>
//         </div>
//     )
// }


// import React from 'react'

// export default function Persons({ person }) {
//     return (
//         <div>
//             <li>{person.name}, {person.skill}, {person.age}</li>
//         </div>
//     )
// }


import React from 'react'

export default function Persons(props) {
   const  {person} = props;
    return (
        <div>
            <li>{person.name}, {person.skill}, {person.age}</li>
        </div>
    )
}
