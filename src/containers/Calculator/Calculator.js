import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Display from './components/Display';
import Keypad from './components/Keypad';

import './Calculator.css';
import { calculatorActions } from '../../state/calculator';

function Calculator({expression, result, onClick}) {
    const keypadHandlers = {
        onClick
    };

    return (
        <div class="calc">
            <Display expression={expression} result={result} />
            <Keypad keys="789=456/123*0.+-" {...keypadHandlers} />
        </div>
    );
}

Calculator.propTypes = {
    expression: propTypes.string,
    result: propTypes.string,
    onClick: propTypes.func.isRequired
};

Calculator.defaultProps = {
    expression: "",
    result: ""
};

const mapStateToProps = ({ calculator }) => {
    return {
        expression: calculator.expression,
        result: calculator.result
    };
};

const mapDispatchToProps = dispatch => ({
    onClick: key => dispatch(calculatorActions.onKeystroke({key}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);