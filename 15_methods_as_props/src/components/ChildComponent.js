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

// export default function ChildComponent({ greetParent }) {
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

// export default function ChildComponent(props) {

//     return (
//         <div>
//             <button onClick={() => props.greetParent()}>Greet Parent</button>
//             <button onClick={() => props.greetParent2("Daniel")}>Greet Parent</button>
//         </div>
//     )
// }

/* 5 passing parameter to parent component AND props destructuring*/

export default function ChildComponent(props) {
    const { greetParent, greetParent2} = props
    return (
        <div>
            <button onClick={() => greetParent()}>Greet Parent</button>
            <button onClick={() => greetParent2("Daniel")}>Greet Parent</button>
            {/* to pass a parameter to parent use the arrow function syntax */}
        </div>
    )
}
