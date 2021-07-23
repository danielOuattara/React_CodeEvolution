import React from 'react'

// 1-> destructuring in the parameter.
// ------------------------------------

// export const Greet = ({ name, heroName }) => { 
//     return (
//         <div>
//             <h1>Hello {name} - {heroName ? heroName : null}</h1>
//             {/* {props.children} */}
//         </div>
//     )
// }


// 2-> destructuring in the parameter.
//-------------------------------------

export const Greet = (props) => {
    const { name, heroName} = props;
    return (
        <div>
            <h1>Hello {name} - {heroName ? heroName: null}</h1>
            {props.children}
        </div>
    )
}
