'use strict';

import React from 'react';

import Products from './../products/products.jsx'
import Recommendations from './../recommendations/recommendations.jsx'
import ShoppingCart from './../shoppingcart/shoppingcart.jsx'

import { connect } from 'react-redux';

let productIds = [0, 1,2,3,4,5,6];

export default class Layout extends React.Component {
    render() {
        const { dispatch, shoppingCart} = this.props;
        return (
            <div className="widgets">
                <h1>Hello!!!</h1>
                <Products productIds = {productIds} onAddProductClick = {(productId, count) => dispatch(addProduct(productId, count)) }  />
                <Recommendations />
                <ShoppingCart shoppingCart = {shoppingCart} />
            </div>
        )
    }
};

function select(state) {
    return {
        shoppingCart: state.shoppingCart
    };
}

function addProduct(productId, count) {
    return {
        type: "addProduct",
        productId,
        count
    }
}

export default connect(select)(Layout);
