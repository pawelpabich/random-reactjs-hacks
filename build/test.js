"use strict";

var Thing = React.createClass({
    displayName: "Thing",

    render: function render() {
        return React.createElement(
            "p",
            null,
            this.props.name
        );
    }
});

var ThingList = React.createClass({
    displayName: "ThingList",

    render: function render() {
        return (React.createElement(
            "h1",
            null,
            "My Things:"
        ), React.createElement(Thing, { name: "Hello asdf!2345689123sdfsdfAAAAAAAAABBBCCCDDD" }));
    }
});

React.renderComponent(React.createElement(ThingList, null), document.querySelector("body"));