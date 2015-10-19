'use strict';

import React from 'react';
import Product from './../product/product.jsx'

export default class Products extends React.Component {
    constructor(props)     {
        super(props);
    }

    render() {
        let products =  this.props.products.map(product => {
            return <li key= {product.id}> <Product name={product.name} price={product.price}
                                 onRemoveClick={productName => this.props.onRemoveProductClick(productName)}
                                 onAddClick={(productName, count) => this.props.onAddProductClick(productName, count)} /> </li>
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
