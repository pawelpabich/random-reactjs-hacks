'use strict';

import React from 'react';
import Layout from './layout/layout.jsx';

import { Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

function shoppingCart(state = [], action) {
    switch (action.type) {
        case "addProduct":
            return [...state, action.productId];
        default:
            return state;
    }
}

function counter(state = 0, action) {
    return state + 1;
}

const eCommerce = combineReducers({
    shoppingCart,
    counter
});


let store = createStore(eCommerce);

React.render(
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    <Provider store={store}>
        {() => <Layout />}
    </Provider>,
    document.getElementById('content')
);