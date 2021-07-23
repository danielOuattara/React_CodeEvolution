import React from 'react'

export const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} - {props.heroName ? props.heroName: null}</h1>
            {props.children}
        </div>
    )
}
