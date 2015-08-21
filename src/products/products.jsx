'use strict';

import React from 'react';
import Product from './../product/product.jsx'

export default class Products extends React.Component {
    constructor(props)     {
        super(props);
    }

    render() {
        let products =  this.props.productIds.map(productId => {
            return <li> <Product productId= {productId} onAddClick={(productId, count) => this.props.onAddProductClick(productId, count)} /> </li>
        })
        return (
            <div className="widget products">
                Products
                <ul>
                    {products}
                </ul>
            </div>
        )
    }
};
