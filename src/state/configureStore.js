import { createStore, combineReducers } from 'redux';
import { calculatorReducer, calculatorInitialState } from './calculator';

const storeInitialState = {
    calculator: calculatorInitialState
};

const rootReducer = combineReducers({
    calculator: calculatorReducer
});

export default createStore(rootReducer, storeInitialState);

