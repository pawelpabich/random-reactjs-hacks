'use strict';

import React from 'react';

export default class Product extends React.Component {
    render() {
        return (
            <ul className="product">
                <li>ProductId: {this.props.productId}</li>
                <li> <input type='text' ref='count' /></li>
                <li>
                    <button onClick={e => this.handleAdd(e)}>
                        Add
                    </button>
                </li>
            </ul>
        )
    }

    handleAdd(e) {
        const node = React.findDOMNode(this.refs.count);
        const count = parseInt(node.value.trim());
        this.props.onAddClick(this.props.productId, count);
        node.value = '';
    }
}