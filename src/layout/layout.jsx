'use strict';

import React from 'react';

import Products from './../products/products.jsx'
import Recommendations from './../recommendations/recommendations.jsx'
import ShoppingCart from './../shoppingcart/shoppingcart.jsx'

import { connect } from 'react-redux';

export default class Layout extends React.Component {
    render() {
        const { dispatch, shoppingCart, products, counter} = this.props;
        return (
            <div className="widgets">
                <Products products = {products} onAddProductClick = {(productName, count) => dispatch(addProduct(productName, count)) } />
                <ShoppingCart shoppingCart = {shoppingCart}  onRemoveProductClick={productName => dispatch(removeProduct(productName))} />
                <Recommendations />
            </div>
        )
    }
};

function select(state) {
    return {
        shoppingCart: state.shoppingCart,
        products: state.products
    };
}

function addProduct(productName, count) {
    return {
        type: "addProduct",
        productName,
        count
    }
}

function removeProduct(productName) {
    return {
        type: "removeProduct",
        productName
    }
}

export default connect(select)(Layout);
