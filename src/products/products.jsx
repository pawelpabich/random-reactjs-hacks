'use strict';

import React from 'react';
import Product from './../product/product.jsx'

export default class Products extends React.Component {
    constructor(props)     {
        super(props);
    }

    render() {
        let products =  this.props.products.map(product => {
            return <li> <Product name={product.name} price={product.price} onAddClick={(productName, count) => this.props.onAddProductClick(productName, count)} /> </li>
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
