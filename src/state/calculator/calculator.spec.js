import configureStore from 'redux-mock-store';
import actions from './calculator';

import { reducer, initialState, actionTypes } from './calculator';

const mockStore = configureStore();
const store = mockStore();

describe('Calculator reducer', () => {

    beforeEach(() => {
        store.clearActions();
    });

    describe('Initial state', () => {

        test('should be correct', () => {
            const action = { type: 'dummy' };

            expect(reducer(undefined, action)).toEqual(initialState);
        });
    });

    describe('ON_KEYSTROKE', () => {

        test('should correctly reduce the state if initial state undefined', () => {
            const action = { type: actionTypes.ON_KEYSTROKE, payload: { key: '1' } };
            expect(reducer(undefined, action)).toEqual({ expression: '1', result: '' });
        });

        test('should correctly reduce the state on = click', () => {
            const action = { type: actionTypes.ON_KEYSTROKE, payload: { key: '=' } };
            const initialState = { expression: '13+5', result: '' }
            expect(reducer(initialState, action)).toEqual({ expression: '18', result: '' });
        });

        test('should show bad expression on = click and invalid expression', () => {
            const action = { type: actionTypes.ON_KEYSTROKE, payload: { key: '=' } };
            const initialState = { expression: '13+/', result: '' }
            expect(reducer(initialState, action)).toEqual({ expression: '13+/', result: 'Bad expression' });
        });

        test('should show result on valid expression before clicking =', () => {
            const action = { type: actionTypes.ON_KEYSTROKE, payload: { key: '5' } };
            const initialState = { expression: '13+', result: '' }
            expect(reducer(initialState, action)).toEqual({ expression: '13+5', result: '18' });
        });
    })
});