import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Display from './components/Display';
import Keypad from './components/Keypad';

import './Calculator.css';
import { calculatorActions } from '../../state/calculator';

function Calculator({expression, result, onNumpadKey, computeResult}) {
    const keypadHandlers = {
        onClick: (key) => onNumpadKey(key)
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
    onNumpadKey: key => dispatch(calculatorActions.onKeystroke({key})),
    computeResult: expression => dispatch(calculatorActions.onCalculate({expression}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);