
import React from 'react'

export default function Columns() {
    const items = ["Daniel", "Julie", "Gaïa", "Amaya"]
    return (
        <React.Fragment>
            { items.map( item => (
                <React.Fragment key={item}>
                    {/* {item } */}
                    <h2>Title</h2>
                    <p>{item}</p>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
