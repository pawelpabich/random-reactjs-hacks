'use strict';

import Products from './../products/products.jsx'
import Recommendations from './../recommendations/recommendations.jsx'
import ShoppingCart from './../shoppingcart/shoppingcart.jsx'

class Layout extends React.Component {
    render() {
        return (
            <div className="widgets">
                <Products />
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