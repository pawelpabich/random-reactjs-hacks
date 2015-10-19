'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router'

import Layout from './layout/layout.jsx';
import Account from './account/account.jsx';

import shoppingCart from './shoppingCartReducers.jsx'
import products from './warehouseReducers.jsx'

import { Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

const eCommerce = combineReducers({
    shoppingCart,
    products
});


let RouteDoesNotExist = (props) => {
    return <p>Page you are looking for does not exist :(.</p>;
};

let P =  <Provider store={createStore(eCommerce)}>
    <Layout />
</Provider>;

ReactDOM.render(
    <Provider store={createStore(eCommerce)}>
        <Router>
            <Route path="/" component={Layout} />
            <Route path="/account" component={Account} />
            <Route path="*" component={RouteDoesNotExist} />
        </Router>
    </Provider>,
    document.getElementById('content')
);



