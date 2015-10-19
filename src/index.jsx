'use strict';

import React from 'react';

import Layout from './layout/layout.jsx';

import shoppingCart from './shoppingCartReducers.jsx'
import products from './warehouseReducers.jsx'

import { Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

const eCommerce = combineReducers({
    shoppingCart,
    products
});

React.render(
    <Provider store={createStore(eCommerce)}>
        <Layout />
    </Provider>,
    document.getElementById('content')
);