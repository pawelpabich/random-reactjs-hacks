'use strict';

import React from 'react';
import Layout from './layout/layout.jsx';

import { Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

function shoppingCart(state = [], action) {
    switch (action.type) {
        case "addProduct":
            let existingProduct = state.find(product => product.name == action.productName ? product : undefined);
            if (!existingProduct) {
                let productToAdd = { name: action.productName, count: action.count}
                return [...state, productToAdd];
            }

            existingProduct.count += action.count;
            return state;
        default:
            return state;
    }
}

function counter(state = 0, action) {
    return state + 1;
}

function products(state) {
    return [
            {name: "Book", price: 12},
            {name: "Laptop", price: 1212}
        ];
}

const eCommerce = combineReducers({
    shoppingCart,
    products,
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