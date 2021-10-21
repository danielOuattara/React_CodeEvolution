
import React from 'react';

function MemoComp({ name}) {
    console.log("Rendering Memo Component");
    return (
        <div>
            Memo Component <br />
            {name}
        </div>
    );
}

export default React.memo(MemoComp); // <---  This how to create a memo component
