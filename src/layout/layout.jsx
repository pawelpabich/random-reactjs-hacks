'use strict';

import Products from './../products/products.jsx'
import Recommendations from './../recommendations/recommendations.jsx'
import ShoppingCart from './../shoppingcart/shoppingcart.jsx'

import { Provider } from 'react-redux';

let productIds = [0, 1,2,3,4,5,6];

class Layout extends React.Component {
    render() {



        return (
            <div className="widgets">
                <Products productIds = {productIds} onAddProductClick = {(productId, count) => console.log(productId, count) }  />
                <Recommendations />
                <ShoppingCart />
            </div>
        )
    }
};


React.render(
    <Layout />,
    document.getElementById('content')
);