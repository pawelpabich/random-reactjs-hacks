var data = [{key : "key1", value: "value1"},
            {key : "key2", value: "value2"}]

class Child extends React.Component {
    render() {
        return (
            <div className="commentBox">
               I am: {this.props.firstName}
            </div>
        );
    }
};

class Parent extends React.Component {
    render() {
        return (
            <div>
                <Child firstName="Child13" />
                <Child firstName="Child33" />
            </div>
        );
    }
};

React.render(
    <Parent />,
    document.getElementById('example')
);