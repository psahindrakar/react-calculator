import { makeActionCreator, makeReducer, composeReducers } from 'redux-toolbelt';

// Actions
export const actions = {
    onKeystroke: makeActionCreator('ON_KEYSTROKE'),
    onCalculate: makeActionCreator('ON_CALCULATE')
};

// Reducer
export const reducer = composeReducers({
    expression: makeReducer(actions.onKeystroke, (expression, { payload: { key } }) => {
        return expression + key;
    }, { defaultState: "" }),
    result: makeReducer(actions.onCalculate, result => result, { defaultState: "" })
});

export const initialState = reducer(undefined, { type: '@@redux/INIT' });