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
                'div',
                { className: 'widget products' },
                'Products',
                React.createElement(
                    'ul',
                    null,
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9QYXdlbC9XZWJzdG9ybVByb2plY3RzL1JlYWN0U3RhcnQvc3JjL2xheW91dC9sYXlvdXQuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9wcm9kdWN0L3Byb2R1Y3QuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9wcm9kdWN0cy9wcm9kdWN0cy5qc3giLCJDOi9Vc2Vycy9QYXdlbC9XZWJzdG9ybVByb2plY3RzL1JlYWN0U3RhcnQvc3JjL3JlY29tbWVuZGF0aW9ucy9yZWNvbW1lbmRhdGlvbnMuanN4IiwiQzovVXNlcnMvUGF3ZWwvV2Vic3Rvcm1Qcm9qZWN0cy9SZWFjdFN0YXJ0L3NyYy9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O21DQUVRLDRCQUE0Qjs7OztpREFDckIsMENBQTBDOzs7OzJDQUM3QyxvQ0FBb0M7Ozs7SUFFdkQsTUFBTTtjQUFOLE1BQU07O2FBQU4sTUFBTTs4QkFBTixNQUFNOzttQ0FBTixNQUFNOzs7aUJBQU4sTUFBTTs7ZUFDRixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsU0FBUztnQkFDcEIsMkRBQVk7Z0JBQ1oseUVBQW1CO2dCQUNuQixtRUFBZ0I7YUFDZCxDQUNUO1NBQ0o7OztXQVRDLE1BQU07R0FBUyxLQUFLLENBQUMsU0FBUzs7QUFVbkMsQ0FBQzs7QUFHRixLQUFLLENBQUMsTUFBTSxDQUNSLG9CQUFDLE1BQU0sT0FBRyxFQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ3JDLENBQUM7OztBQ3RCRixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBRVEsT0FBTztjQUFQLE9BQU87O2FBQVAsT0FBTzs4QkFBUCxPQUFPOzttQ0FBUCxPQUFPOzs7aUJBQVAsT0FBTzs7ZUFDbEIsa0JBQUc7QUFDTCxtQkFDSTs7O2dCQUNLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzthQUNwQixDQUNSO1NBQ0o7OztXQVBnQixPQUFPO0dBQVMsS0FBSyxDQUFDLFNBQVM7O3FCQUEvQixPQUFPOzs7O0FDRjVCLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQTs7SUFFNUIsUUFBUTtjQUFSLFFBQVE7O0FBQ2QsYUFETSxRQUFRLENBQ2IsS0FBSyxFQUFNOzhCQUROLFFBQVE7O0FBRXJCLG1DQUZhLFFBQVEsNkNBRWYsS0FBSyxFQUFFO0FBQ2IsWUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUcsVUFBVSxFQUFHLFVBQVU7QUFDdkIsbUJBQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUM7U0FDN0MsQ0FBQztLQUNMOztpQkFQZ0IsUUFBUTs7ZUFTbkIsa0JBQUc7QUFDTCxnQkFBSSxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsU0FBUyxFQUFJO0FBQ2xELHVCQUFPLG9CQUFDLE9BQU8sSUFBQyxTQUFTLEVBQUcsU0FBUyxBQUFDLEdBQUcsQ0FBQTthQUM1QyxDQUFDLENBQUE7QUFDRixtQkFDSTs7a0JBQUssU0FBUyxFQUFDLGlCQUFpQjs7Z0JBRTVCOzs7b0JBQ0ssT0FBTztvQkFDUjs7O3dCQUNJOzs4QkFBUSxJQUFJLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLEtBQUssRUFBQyxVQUFVOzt5QkFBa0I7cUJBQzdGO2lCQUNKO2FBQ0gsQ0FDVDtTQUNKOzs7ZUFFVSx1QkFBRztBQUNWLGdCQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDeEMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2QyxnQkFBSSxDQUFDLFFBQVEsQ0FBRSxFQUFDLFVBQVUsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztTQUM3RTs7O1dBOUJnQixRQUFRO0dBQVMsS0FBSyxDQUFDLFNBQVM7O3FCQUFoQyxRQUFRO0FBK0I1QixDQUFDOzs7O0FDbkNGLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFFUSxlQUFlO2NBQWYsZUFBZTs7YUFBZixlQUFlOzhCQUFmLGVBQWU7O21DQUFmLGVBQWU7OztpQkFBZixlQUFlOztlQUMxQixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsUUFBUTs7YUFFakIsQ0FDVDtTQUNKOzs7V0FQZ0IsZUFBZTtHQUFTLEtBQUssQ0FBQyxTQUFTOztxQkFBdkMsZUFBZTtBQVFuQyxDQUFDOzs7O0FDVkYsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQUVRLFlBQVk7Y0FBWixZQUFZOzthQUFaLFlBQVk7OEJBQVosWUFBWTs7bUNBQVosWUFBWTs7O2lCQUFaLFlBQVk7O2VBQ3ZCLGtCQUFHO0FBQ0wsbUJBQ0k7O2tCQUFLLFNBQVMsRUFBQyxRQUFROzthQUVqQixDQUNUO1NBQ0o7OztXQVBnQixZQUFZO0dBQVMsS0FBSyxDQUFDLFNBQVM7O3FCQUFwQyxZQUFZO0FBUWhDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vLi4vcHJvZHVjdHMvcHJvZHVjdHMuanN4J1xyXG5pbXBvcnQgUmVjb21tZW5kYXRpb25zIGZyb20gJy4vLi4vcmVjb21tZW5kYXRpb25zL3JlY29tbWVuZGF0aW9ucy5qc3gnXHJcbmltcG9ydCBTaG9wcGluZ0NhcnQgZnJvbSAnLi8uLi9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LmpzeCdcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDxSZWNvbW1lbmRhdGlvbnMgLz5cclxuICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblJlYWN0LnJlbmRlcihcclxuICAgIDxMYXlvdXQgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbik7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMucHJvZHVjdElkfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQcm9kdWN0ID0gcmVxdWlyZSgnLi8uLi9wcm9kdWN0L3Byb2R1Y3QuanN4JylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSAgICAge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBsZXQgcHJvZHVjdElkcyA9IFswLCAxLDIsMyw0LDUsNl07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgIHByb2R1Y3RJZHMgOiBwcm9kdWN0SWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBwcm9kdWN0SWRzLmxlbmd0aCAtIDFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgY29udGVudCA9ICB0aGlzLnN0YXRlLnByb2R1Y3RJZHMubWFwKHByb2R1Y3RJZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdCBwcm9kdWN0SWQ9IHtwcm9kdWN0SWR9IC8+XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldCBwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0gdmFsdWU9XCJDbGljayBtZVwiPkNsaWNrIG1lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IHRoaXMuc3RhdGUuY291bnRlciArIDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcm9kdWN0SWRzLnB1c2gobmV3Q291bnRlcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgge3Byb2R1Y3RJZHMgOiB0aGlzLnN0YXRlLnByb2R1Y3RJZHMsIGNvdW50ZXI6IG5ld0NvdW50ZXJ9KTtcclxuICAgIH1cclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb21tZW5kYXRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAgUmVjb21tZW5kYXRpb25zXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wcGluZ0NhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICBTaG9wcGluZyBjYXJ0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufTsiXX0=
