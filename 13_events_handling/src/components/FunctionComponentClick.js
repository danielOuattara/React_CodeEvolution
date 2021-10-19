// rfce
import React from 'react';

export default function FunctionComponentClick() {

    function onClickHandler() {
        console.log("Hello");
    }

    const onClickHandler2 = () => {
        console.log("Hello");
    }

    return (
        <div>
            <button onClick={onClickHandler}>Function Component Click</button>
            <button onClick={() => onClickHandler()}>Function Component Click</button>
            <button onClick={onClickHandler2}>Funtion Component Click</button>
        </div>
    )
}
