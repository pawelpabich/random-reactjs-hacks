"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Child = (function (_React$Component) {
    _inherits(Child, _React$Component);

    function Child(props) {
        _classCallCheck(this, Child);

        _get(Object.getPrototypeOf(Child.prototype), "constructor", this).call(this, props);
        this.state = [{ key: "key1", value: "value1" }, { key: "key2", value: "value2" }];
    }

    _createClass(Child, [{
        key: "render",
        value: function render() {
            var _this = this;

            var content = this.state.map(function (item) {
                return React.createElement(
                    "li",
                    { className: "child" },
                    "I am: ",
                    item.key,
                    " and ",
                    _this.props.firstName
                );
            });
            return React.createElement(
                "ul",
                null,
                content
            );
        }
    }]);

    return Child;
})(React.Component);

;

var Parent = (function (_React$Component2) {
    _inherits(Parent, _React$Component2);

    function Parent() {
        _classCallCheck(this, Parent);

        _get(Object.getPrototypeOf(Parent.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Parent, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Child, { firstName: "Child13" }),
                React.createElement(Child, { firstName: "Child33" })
            );
        }
    }]);

    return Parent;
})(React.Component);

;

React.render(React.createElement(Parent, null), document.getElementById("example"));
//# sourceMappingURL=all.js.map