"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Products = (function (_React$Component) {
    _inherits(Products, _React$Component);

    function Products(props) {
        _classCallCheck(this, Products);

        _get(Object.getPrototypeOf(Products.prototype), "constructor", this).call(this, props);
        var productIds = [0, 1, 2, 3, 4, 5, 6];
        this.state = { productIds: productIds,
            counter: productIds.length - 1
        };
    }

    _createClass(Products, [{
        key: "render",
        value: function render() {
            var content = this.state.productIds.map(function (productId) {
                return React.createElement(Product, { productId: productId });
            });
            return React.createElement(
                "ul",
                { className: "widget" },
                content,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "button",
                        { type: "button", onClick: this.handleClick.bind(this), value: "Click me" },
                        "Click me"
                    )
                )
            );
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            var newCounter = this.state.counter + 1;
            this.state.productIds.push(newCounter);
            this.setState({ productIds: this.state.productIds, counter: newCounter });
        }
    }]);

    return Products;
})(React.Component);

;

var Product = (function (_React$Component2) {
    _inherits(Product, _React$Component2);

    function Product() {
        _classCallCheck(this, Product);

        _get(Object.getPrototypeOf(Product.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Product, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.productId
            );
        }
    }]);

    return Product;
})(React.Component);

var ShoppingCart = (function (_React$Component3) {
    _inherits(ShoppingCart, _React$Component3);

    function ShoppingCart() {
        _classCallCheck(this, ShoppingCart);

        _get(Object.getPrototypeOf(ShoppingCart.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(ShoppingCart, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "widget" },
                "ShoppingCart"
            );
        }
    }]);

    return ShoppingCart;
})(React.Component);

;

var Recommendations = (function (_React$Component4) {
    _inherits(Recommendations, _React$Component4);

    function Recommendations() {
        _classCallCheck(this, Recommendations);

        _get(Object.getPrototypeOf(Recommendations.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Recommendations, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "widget" },
                "Recommendations"
            );
        }
    }]);

    return Recommendations;
})(React.Component);

;

var Layout = (function (_React$Component5) {
    _inherits(Layout, _React$Component5);

    function Layout() {
        _classCallCheck(this, Layout);

        _get(Object.getPrototypeOf(Layout.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "widgets" },
                React.createElement(Products, null),
                React.createElement(Recommendations, null),
                React.createElement(ShoppingCart, null)
            );
        }
    }]);

    return Layout;
})(React.Component);

;

React.render(React.createElement(Layout, null), document.getElementById("content"));
//# sourceMappingURL=all.js.map