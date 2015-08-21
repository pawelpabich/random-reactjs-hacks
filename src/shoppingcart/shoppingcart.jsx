'use strict';

import React from 'react';

export default class ShoppingCart extends React.Component {
    render() {
        let products =  this.props.shoppingCart.map(productId => {
            return <li> {productId} </li>
        })
        return (
            <div className="widget products">
                Shopping Cart
                <ul>
                    {products}
                </ul>
            </div>
        )}
};