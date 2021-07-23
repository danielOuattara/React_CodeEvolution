
import React from 'react';

const heading = {
    fontSize: "72px",
    color: "blue",
    fontWeight: "400",
}

export default function InlineStyle() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
            <h1 className="error">Error</h1>
        </div>
    )
}
