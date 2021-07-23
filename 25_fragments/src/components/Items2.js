
import React from 'react'

export default function Columns() {
    const items = ["Daniel", "Julie", "Gaïa", "Amaya"]
    return (
        <>
            { items.map( item => (
                <React.Fragment key={item}>
                    {/* {item } */}
                    <h2>Title</h2>
                    <p>{item}</p>
                </React.Fragment>
            ))}
        </>
    )
}
