import React from 'react';
import './NumpadKey.css';

function NumpadKey({value, onClick}) {

    return (
        <div className="key" onClick={() => onClick(value)}><p><b>{value}</b></p></div>
    );
}

export default NumpadKey;