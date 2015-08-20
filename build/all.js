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
                React.createElement(_productsProductsJsx2['default'], null),
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
            return React.createElement(
                'li',
                null,
                this.props.productId
            );
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
        var productIds = [0, 1, 2, 3, 4, 5, 6];
        this.state = { productIds: productIds,
            counter: productIds.length - 1
        };
    }

    _createClass(Products, [{
        key: 'render',
        value: function render() {
            var content = this.state.productIds.map(function (productId) {
                return React.createElement(Product, { productId: productId });
            });
            return React.createElement(
                'ul',
                { className: 'widget' },
                content,
                React.createElement(
                    'li',
                    null,
                    React.createElement(
                        'button',
                        { type: 'button', onClick: this.handleClick.bind(this), value: 'Click me' },
                        'Click me'
                    )
                )
            );
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var newCounter = this.state.counter + 1;
            this.state.productIds.push(newCounter);
            this.setState({ productIds: this.state.productIds, counter: newCounter });
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9QYXdlbC9XZWJzdG9ybVByb2plY3RzL1JlYWN0U3RhcnQvc3JjL2xheW91dC9sYXlvdXQuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9wcm9kdWN0L3Byb2R1Y3QuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9wcm9kdWN0cy9wcm9kdWN0cy5qc3giLCJDOi9Vc2Vycy9QYXdlbC9XZWJzdG9ybVByb2plY3RzL1JlYWN0U3RhcnQvc3JjL3JlY29tbWVuZGF0aW9ucy9yZWNvbW1lbmRhdGlvbnMuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O21DQUVRLDRCQUE0Qjs7OztpREFDckIsMENBQTBDOzs7OzJDQUM3QyxvQ0FBb0M7Ozs7SUFFdkQsTUFBTTtjQUFOLE1BQU07O2FBQU4sTUFBTTs4QkFBTixNQUFNOzttQ0FBTixNQUFNOzs7aUJBQU4sTUFBTTs7ZUFDRixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsU0FBUztnQkFDcEIsMkRBQVk7Z0JBQ1oseUVBQW1CO2dCQUNuQixtRUFBZ0I7YUFDZCxDQUNUO1NBQ0o7OztXQVRDLE1BQU07R0FBUyxLQUFLLENBQUMsU0FBUzs7QUFVbkMsQ0FBQzs7QUFHRixLQUFLLENBQUMsTUFBTSxDQUNSLG9CQUFDLE1BQU0sT0FBRyxFQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3JDLENBQUM7OztBQ3RCRixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBRVEsT0FBTztjQUFQLE9BQU87O2FBQVAsT0FBTzs4QkFBUCxPQUFPOzttQ0FBUCxPQUFPOzs7aUJBQVAsT0FBTzs7ZUFDbEIsa0JBQUc7QUFDTCxtQkFDSTs7O2dCQUNLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzthQUNwQixDQUNSO1NBQ0o7OztXQVBnQixPQUFPO0dBQVMsS0FBSyxDQUFDLFNBQVM7O3FCQUEvQixPQUFPOzs7O0FDRjVCLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQTs7SUFFNUIsUUFBUTtjQUFSLFFBQVE7O0FBQ2QsYUFETSxRQUFRLENBQ2IsS0FBSyxFQUFNOzhCQUROLFFBQVE7O0FBRXJCLG1DQUZhLFFBQVEsNkNBRWYsS0FBSyxFQUFFO0FBQ2IsWUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUcsVUFBVSxFQUFHLFVBQVU7QUFDdkIsbUJBQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDN0MsQ0FBQztLQUNMOztpQkFQZ0IsUUFBUTs7ZUFTbkIsa0JBQUc7QUFDTCxnQkFBSSxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsU0FBUyxFQUFJO0FBQ2xELHVCQUFPLG9CQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUcsU0FBUyxBQUFDLEdBQUcsQ0FBQTthQUM1QyxDQUFDLENBQUE7QUFDRixtQkFDSTs7a0JBQUksU0FBUyxFQUFDLFFBQVE7Z0JBQ2pCLE9BQU87Z0JBQ1I7OztvQkFDSTs7MEJBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxLQUFLLEVBQUMsVUFBVTs7cUJBQWtCO2lCQUM3RjthQUNKLENBQ1I7U0FDSjs7O2VBRVUsdUJBQUc7QUFDVixnQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLGdCQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkMsZ0JBQUksQ0FBQyxRQUFRLENBQUUsRUFBQyxVQUFVLEVBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7U0FDN0U7OztXQTNCZ0IsUUFBUTtHQUFTLEtBQUssQ0FBQyxTQUFTOztxQkFBaEMsUUFBUTtBQTRCNUIsQ0FBQzs7OztBQ2hDRixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBRVEsZUFBZTtjQUFmLGVBQWU7O2FBQWYsZUFBZTs4QkFBZixlQUFlOzttQ0FBZixlQUFlOzs7aUJBQWYsZUFBZTs7ZUFDMUIsa0JBQUc7QUFDTCxtQkFDSTs7a0JBQUssU0FBUyxFQUFDLFFBQVE7O2FBRWpCLENBQ1Q7U0FDSjs7O1dBUGdCLGVBQWU7R0FBUyxLQUFLLENBQUMsU0FBUzs7cUJBQXZDLGVBQWU7QUFRbkMsQ0FBQzs7OztBQ1ZGLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFFUSxZQUFZO2NBQVosWUFBWTs7YUFBWixZQUFZOzhCQUFaLFlBQVk7O21DQUFaLFlBQVk7OztpQkFBWixZQUFZOztlQUN2QixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsUUFBUTs7YUFFakIsQ0FDVDtTQUNKOzs7V0FQZ0IsWUFBWTtHQUFTLEtBQUssQ0FBQyxTQUFTOztxQkFBcEMsWUFBWTtBQVFoQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLy4uL3Byb2R1Y3RzL3Byb2R1Y3RzLmpzeCdcclxuaW1wb3J0IFJlY29tbWVuZGF0aW9ucyBmcm9tICcuLy4uL3JlY29tbWVuZGF0aW9ucy9yZWNvbW1lbmRhdGlvbnMuanN4J1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0IGZyb20gJy4vLi4vc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5qc3gnXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0c1wiPlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8UmVjb21tZW5kYXRpb25zIC8+XHJcbiAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5SZWFjdC5yZW5kZXIoXHJcbiAgICA8TGF5b3V0IC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4pOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2R1Y3RJZH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUHJvZHVjdCA9IHJlcXVpcmUoJy4vLi4vcHJvZHVjdC9wcm9kdWN0LmpzeCcpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgICAgIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RJZHMgPSBbMCwgMSwyLDMsNCw1LDZdO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ICBwcm9kdWN0SWRzIDogcHJvZHVjdElkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogcHJvZHVjdElkcy5sZW5ndGggLSAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSAgdGhpcy5zdGF0ZS5wcm9kdWN0SWRzLm1hcChwcm9kdWN0SWQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFByb2R1Y3QgcHJvZHVjdElkPSB7cHJvZHVjdElkfSAvPlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfSB2YWx1ZT1cIkNsaWNrIG1lXCI+Q2xpY2sgbWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gdGhpcy5zdGF0ZS5jb3VudGVyICsgMTtcclxuICAgICAgICB0aGlzLnN0YXRlLnByb2R1Y3RJZHMucHVzaChuZXdDb3VudGVyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCB7cHJvZHVjdElkcyA6IHRoaXMuc3RhdGUucHJvZHVjdElkcywgY291bnRlcjogbmV3Q291bnRlcn0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvbW1lbmRhdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICBSZWNvbW1lbmRhdGlvbnNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BwaW5nQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgIFNob3BwaW5nIGNhcnRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59OyJdfQ==
