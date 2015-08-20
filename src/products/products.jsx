'use strict';

var Product = require('./../product/product.jsx')

export default class Products extends React.Component {
    constructor(props)     {
        super(props);
        let productIds = [0, 1,2,3,4,5,6];
        this.state = {  productIds : productIds,
                        counter: productIds.length - 1
        };
    }

    render() {
        let content =  this.state.productIds.map(productId => {
            return <Product productId= {productId} />
        })
        return (
            <div className="widget products">
                Products
                <ul>
                    {content}
                    <li>
                        <button type="button" onClick={this.handleClick.bind(this)} value="Click me">Click me</button>
                    </li>
                </ul>
            </div>
        )
    }

    handleClick() {
        let newCounter = this.state.counter + 1;
        this.state.productIds.push(newCounter);
        this.setState( {productIds : this.state.productIds, counter: newCounter});
    }
};
