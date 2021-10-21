
import React from 'react'

export default function Columns() {
    const items = ["Daniel", "Julie", "Gaïa", "Amaya"]
    return (
        <React.Fragment>
            { items.map( item => (
                <React.Fragment key={item}>
                    {/* {item } */}
                    <h3>Title</h3>
                    <p>{item}</p>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
