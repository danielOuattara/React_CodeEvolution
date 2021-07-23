
import React from 'react'

export default function MemoComp({ name}) {
    console.log("Rendering Reg. Function Component")
    return (
        <div>
            Memo Component <br />
            {name}
        </div>
    )
}
