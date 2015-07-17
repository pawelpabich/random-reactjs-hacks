"use strict";

var Child = React.createClass({
    displayName: "Child",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            "I am: ",
            this.props.firstName
        );
    }
});

var Parent = React.createClass({
    displayName: "Parent",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(Child, { firstName: "Child1" }),
            React.createElement(Child, { firstName: "Child3" })
        );
    }
});

React.render(React.createElement(Parent, null), document.getElementById("example"));
//# sourceMappingURL=all.js.map