
// NEW !
import React from 'react';
import "./MyStyle.css";

export default function StyleSheet(props) {
    let className = props.primary ? "primary": ""
    return (
        <div>
            <h1 className="primary font-xl">Stylesheet</h1>

            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}
