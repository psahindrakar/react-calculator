import React from 'react';
import './Keypad.css';
import NumpadKey from '../../../../components/NumpadKey';

function Keypad({keys, onClick}) {
    const events = {
        onClick
    };

    return (
        <div class="keypad">
            {keys.split('').map(key => (
                <NumpadKey value={key} {...events} />
            ))}
        </div>
    );
}

export default Keypad;
