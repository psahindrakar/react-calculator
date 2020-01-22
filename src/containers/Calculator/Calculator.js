import React from 'react';
import './Calculator.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function Calculator() {
    return (
    <div class="calc">
        <Display></Display>
        <Keypad></Keypad>
    </div>);
}

export default Calculator;