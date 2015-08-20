
class Products extends React.Component {
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
            <ul className="widget">
                {content}
                <li>
                    <button type="button" onClick={this.handleClick.bind(this)} value="Click me">Click me</button>
                </li>
            </ul>
        )
    }

    handleClick() {
        let newCounter = this.state.counter + 1;
        this.state.productIds.push(newCounter);
        this.setState( {productIds : this.state.productIds, counter: newCounter});
    }
};

class Product extends React.Component {
    render() {
        return (
            <li>
                {this.props.productId}
            </li>
        )
    }
}

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="widget">
                ShoppingCart
            </div>
        )
    }
};

class Recommendations extends React.Component {
    render() {
        return (
            <div className="widget">
                Recommendations
            </div>
        )
    }
};

class Layout extends React.Component {
    render() {
        return (
            <div className="widgets">
                <Products />
                <Recommendations  />
                <ShoppingCart />
            </div>
        )
    }
};


React.render(
    <Layout />,
    document.getElementById('content')
);