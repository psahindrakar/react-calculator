import { makeActionCreator, makeReducer } from 'redux-toolbelt';

// Actions
export const actions = {
    onKeystroke: makeActionCreator('ON_KEYSTROKE'),
    onCalculate: makeActionCreator('ON_CALCULATE')
};

const calculatorRegex = /^([-+]?)((\d+)?(.\d+)?)(?:([-+*\/])((?:[-+])?\d+(.\d+)?))+$/;

const evaluateExpression = expression => '' + new Function(`return ${expression}`)();

// Reducer
export const reducer = makeReducer({
        [actions.onKeystroke]: ({expression, result}, { payload: { key } }) => {
            if (key === '=') {
                return {
                    expression: calculatorRegex.test(expression) ? evaluateExpression(expression) : expression,
                    result: calculatorRegex.test(expression) ? '' : 'Bad expression'
                }    
            }

            const updatedExpression = expression + key;
            return { 
                expression: updatedExpression,
                result: calculatorRegex.test(updatedExpression) ? evaluateExpression(updatedExpression) : result
            }
        }
    }, { 
        defaultState: {
            expression: '',
            result: ''
        } 
    }
);

export const initialState = reducer(undefined, { type: '@@redux/INIT' });