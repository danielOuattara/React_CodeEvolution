import React from 'react'

/* 1 */

// export default function ChildComponent(props) {

//     return (
//         <div>
//             <button onClick={props.greetParent}>Greet Parent</button>
//         </div>
//     )
// }


/* 2 */

// export default function ChildComponent({ greetParent}) {

//     return (
//         <div>
//             <button onClick={greetParent}>Greet Parent</button>
//         </div>
//     )
// }


/* 3 */

// export default function ChildComponent(props) {
//     const {greetParent} = props
//     return (
//         <div>
//             <button onClick={greetParent}>Greet Parent</button>
//         </div>
//     )
// }


/* 4 passing parameter to parent component*/

export default function ChildComponent(props) {
    const { greetParent, greetParent2} = props
    return (
        <div>
            <button onClick={() => greetParent()}>Greet Parent</button>
            <button onClick={() => greetParent2("Daniel")}>Greet Parent</button>
        </div>
    )
}
