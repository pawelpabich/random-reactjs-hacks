'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Product extends React.Component {
    render() {
        return (
            <ul className="product">
                <li>Name: {this.props.name} </li>
                <li>Price: {this.props.price} </li>
                <li> <input type='text' ref='count' /></li>
                <li>
                    Count:
                    <button onClick={e => this.handleAdd(e)}>
                        Add
                    </button>
                </li>
            </ul>
        )
    }

    handleAdd(e) {
        const node = ReactDOM.findDOMNode(this.refs.count);
        const count = parseInt(node.value.trim());
        this.props.onAddClick(this.props.name, count);
        node.value = '';
    }
}