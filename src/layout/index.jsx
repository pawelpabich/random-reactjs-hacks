'use strict';

import React from 'react';
import Layout from 'layout.jsx';

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

function doNothing(state = [], action) {
    return state;
}

const eCommerece = combineReducers({
    shoppingCart,
    doNothing
});


let store = createStore(eCommerece);

React.render(
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    <Layout />,

    document.getElementById('content')
);