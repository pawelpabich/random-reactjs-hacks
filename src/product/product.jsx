'use strict';

export default class Product extends React.Component {
    render() {
        return (
            <li>
                {this.props.productId}
            </li>
        )
    }
}