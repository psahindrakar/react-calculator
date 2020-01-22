import React from 'react';
import './Keypad.css';
import NumpadKey from '../../../../components/NumpadKey';

function Keypad() {
    return (
        <div class="keypad">
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>

            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>

            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>

            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
            <NumpadKey></NumpadKey>
        </div>
    );
}

export default Keypad;
