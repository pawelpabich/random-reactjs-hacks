var Child = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
               I am: {this.props.firstName}
            </div>
        );
    }
});

var Parent = React.createClass({
    render: function() {
        return (
            <div>
                <Child firstName="Child1" />
                <Child firstName="Child3" />
            </div>
        );
    }
});

React.render(
    <Parent />,
    document.getElementById('example')
);