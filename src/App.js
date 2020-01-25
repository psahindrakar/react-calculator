import React from 'react';
import { Provider } from 'react-redux';

import store from './state/configureStore';
import Calculator from './containers/Calculator';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Calculator></Calculator>
            </div>
        </Provider>
        
    );
}

export default App;

