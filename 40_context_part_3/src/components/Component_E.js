
import React from 'react';
import ComponentF from './Component_F';
import UserContext from './userContext';


export default function ComponentE() {
    return <ComponentF />
}

ComponentE.contextType = UserContext