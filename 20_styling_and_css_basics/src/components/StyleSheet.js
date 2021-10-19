
// NEW !
import React from 'react';
import "./StyleSheet.css";

export default function StyleSheet(props) {
    let classPrimary = props.primary ? "primary": ""
    let classSecondary = props.secondary ? "secondary": ""
    return (
        <div>
            <p className="title">using StyleSheet.css</p>
            <h2 className="primary font-xl">Stylesheet- 1</h2>
            <h2 className="secondary">Stylesheet- 2</h2>
            <h2 className={`${classPrimary} font-xl`}>Stylesheet</h2>
            <h2 className={`${classSecondary} font-xl`}>Stylesheet</h2>
        </div>
    )
}
