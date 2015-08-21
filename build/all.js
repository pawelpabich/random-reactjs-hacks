(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _productsProductsJsx = require('./../products/products.jsx');

var _productsProductsJsx2 = _interopRequireDefault(_productsProductsJsx);

var _recommendationsRecommendationsJsx = require('./../recommendations/recommendations.jsx');

var _recommendationsRecommendationsJsx2 = _interopRequireDefault(_recommendationsRecommendationsJsx);

var _shoppingcartShoppingcartJsx = require('./../shoppingcart/shoppingcart.jsx');

var _shoppingcartShoppingcartJsx2 = _interopRequireDefault(_shoppingcartShoppingcartJsx);

var productIds = [0, 1, 2, 3, 4, 5, 6];

var Layout = (function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { className: 'widgets' },
                React.createElement(_productsProductsJsx2['default'], { productIds: productIds, onAddProductClick: function (productId, count) {
                        return console.log(productId, count);
                    } }),
                React.createElement(_recommendationsRecommendationsJsx2['default'], null),
                React.createElement(_shoppingcartShoppingcartJsx2['default'], null)
            );
        }
    }]);

    return Layout;
})(React.Component);

;

React.render(React.createElement(Layout, null), document.getElementById('content'));

},{"./../products/products.jsx":3,"./../recommendations/recommendations.jsx":4,"./../shoppingcart/shoppingcart.jsx":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = (function (_React$Component) {
    _inherits(Product, _React$Component);

    function Product() {
        _classCallCheck(this, Product);

        _get(Object.getPrototypeOf(Product.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Product, [{
        key: 'render',
        value: function render() {
            var _this = this;

            return React.createElement(
                'ul',
                { className: 'product' },
                React.createElement(
                    'li',
                    null,
                    'ProductId: ',
                    this.props.productId
                ),
                React.createElement(
                    'li',
                    null,
                    ' ',
                    React.createElement('input', { type: 'text', ref: 'count' })
                ),
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'button',
                        { onClick: function (e) {
                                return _this.handleAdd(e);
                            } },
                        'Add'
                    )
                )
            );
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd(e) {
            var node = React.findDOMNode(this.refs.count);
            var count = parseInt(node.value.trim());
            this.props.onAddClick(this.props.productId, count);
            node.value = '';
        }
    }]);

    return Product;
})(React.Component);

exports['default'] = Product;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = require('./../product/product.jsx');

var Products = (function (_React$Component) {
    _inherits(Products, _React$Component);

    function Products(props) {
        _classCallCheck(this, Products);

        _get(Object.getPrototypeOf(Products.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Products, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var products = this.props.productIds.map(function (productId) {
                return React.createElement(
                    'li',
                    null,
                    ' ',
                    React.createElement(Product, { productId: productId, onAddClick: function (productId, count) {
                            return _this.props.onAddProductClick(productId, count);
                        } }),
                    ' '
                );
            });
            return React.createElement(
                'div',
                { className: 'widget products' },
                'Products',
                React.createElement(
                    'ul',
                    null,
                    products
                )
            );
        }
    }]);

    return Products;
})(React.Component);

exports['default'] = Products;
;
module.exports = exports['default'];

},{"./../product/product.jsx":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recommendations = (function (_React$Component) {
    _inherits(Recommendations, _React$Component);

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

exports["default"] = Recommendations;
;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoppingCart = (function (_React$Component) {
    _inherits(ShoppingCart, _React$Component);

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
                "Shopping cart"
            );
        }
    }]);

    return ShoppingCart;
})(React.Component);

exports["default"] = ShoppingCart;
;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9QYXdlbC9XZWJzdG9ybVByb2plY3RzL1JlYWN0U3RhcnQvc3JjL2xheW91dC9sYXlvdXQuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9wcm9kdWN0L3Byb2R1Y3QuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9wcm9kdWN0cy9wcm9kdWN0cy5qc3giLCJDOi9Vc2Vycy9QYXdlbC9XZWJzdG9ybVByb2plY3RzL1JlYWN0U3RhcnQvc3JjL3JlY29tbWVuZGF0aW9ucy9yZWNvbW1lbmRhdGlvbnMuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O21DQUVRLDRCQUE0Qjs7OztpREFDckIsMENBQTBDOzs7OzJDQUM3QyxvQ0FBb0M7Ozs7QUFFN0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7SUFFNUIsTUFBTTtjQUFOLE1BQU07O2FBQU4sTUFBTTs4QkFBTixNQUFNOzttQ0FBTixNQUFNOzs7aUJBQU4sTUFBTTs7ZUFDRixrQkFBRzs7QUFJTCxtQkFDSTs7a0JBQUssU0FBUyxFQUFDLFNBQVM7Z0JBQ3BCLHdEQUFVLFVBQVUsRUFBSSxVQUFVLEFBQUMsRUFBQyxpQkFBaUIsRUFBSSxVQUFDLFNBQVMsRUFBRSxLQUFLOytCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztxQkFB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QUFaLFlBQVk7O21DQUFaLFlBQVk7OztpQkFBWixZQUFZOztlQUN2QixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsUUFBUTs7YUFFakIsQ0FDVDtTQUNKOzs7V0FQZ0IsWUFBWTtHQUFTLEtBQUssQ0FBQyxTQUFTOztxQkFBcEMsWUFBWTtBQVFoQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLy4uL3Byb2R1Y3RzL3Byb2R1Y3RzLmpzeCdcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9ucyBmcm9tICcuLy4uL3JlY29tbWVuZGF0aW9ucy9yZWNvbW1lbmRhdGlvbnMuanN4J1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0IGZyb20gJy4vLi4vc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5qc3gnXHJcblxyXG5sZXQgcHJvZHVjdElkcyA9IFswLCAxLDIsMyw0LDUsNl07XHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RzIHByb2R1Y3RJZHMgPSB7cHJvZHVjdElkc30gb25BZGRQcm9kdWN0Q2xpY2sgPSB7KHByb2R1Y3RJZCwgY291bnQpID0+IGNvbnNvbGUubG9nKHByb2R1Y3RJZCwgY291bnQpIH0gIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVjb21tZW5kYXRpb25zIC8+XHJcbiAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5SZWFjdC5yZW5kZXIoXHJcbiAgICA8TGF5b3V0IC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+UHJvZHVjdElkOiB7dGhpcy5wcm9wcy5wcm9kdWN0SWR9PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4gPGlucHV0IHR5cGU9J3RleHQnIHJlZj0nY291bnQnIC8+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVBZGQoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFkZChlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5jb3VudCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBwYXJzZUludChub2RlLnZhbHVlLnRyaW0oKSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFkZENsaWNrKHRoaXMucHJvcHMucHJvZHVjdElkLCBjb3VudCk7XHJcbiAgICAgICAgbm9kZS52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFByb2R1Y3QgPSByZXF1aXJlKCcuLy4uL3Byb2R1Y3QvcHJvZHVjdC5qc3gnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpICAgICB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSAgdGhpcy5wcm9wcy5wcm9kdWN0SWRzLm1hcChwcm9kdWN0SWQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGxpPiA8UHJvZHVjdCBwcm9kdWN0SWQ9IHtwcm9kdWN0SWR9IG9uQWRkQ2xpY2s9eyhwcm9kdWN0SWQsIGNvdW50KSA9PiB0aGlzLnByb3BzLm9uQWRkUHJvZHVjdENsaWNrKHByb2R1Y3RJZCwgY291bnQpfSAvPiA8L2xpPlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQgcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvbW1lbmRhdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWNvbW1lbmRhdGlvbnNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BwaW5nQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgIFNob3BwaW5nIGNhcnRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59OyJdfQ==
