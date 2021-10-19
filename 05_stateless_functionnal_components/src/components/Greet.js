import React from 'react'


// function Greet() {
//     return (
//         <div>
//             <h1>Hello Daniel</h1>
//         </div>
//     )
// }

//export default Greet;


// const Greet = () => {
//     return (
//         <div>
//             <h1>Hello Daniel</h1>
//         </div>
//     )
// }

//export default Greet;


export const Greet = (props) => { // Name export: you have to import the component with the exact same name
    return (
        <div>
            <h1>Hello Daniel</h1>
            <h1>Hello {props.name}</h1>
        </div>
    )
}
