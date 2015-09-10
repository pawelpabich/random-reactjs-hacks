'use strict';

import React from 'react';

export default class ShoppingCart extends React.Component {
    render() {
        let products =  this.props.shoppingCart.map(product  => {
            return <li> {product.name} - {product.count} </li>
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