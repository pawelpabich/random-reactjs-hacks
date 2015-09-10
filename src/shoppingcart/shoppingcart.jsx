'use strict';

import React from 'react';

export default class ShoppingCart extends React.Component {
    render() {
        let products =  this.props.shoppingCart.map(product  => {
            return <li> {product.name}({product.count}) <button onClick={e => this.props.onRemoveProductClick(product.name)}>Remove</button> </li>
        })
        return (
            <div className="widget products">
                Shopping Cart
                <ul>
                    {products}
                </ul>
                Total: {this.total(this.props.shoppingCart)}
            </div>
        )}

    total(shoppingCart) {
        return shoppingCart.reduce((runningCount ,product) => runningCount + product.count, 0)
    }
};