
class Child extends React.Component {
    constructor(props)     {
        super(props);
        this.state = [{key : "key1", value: "value1"},
                    {key : "key2", value: "value2"}];
    }

    render() {
        let content =  this.state.map(item => {
            return <li className="child">
                I am: {item.key} and {this.props.firstName}
            </li>
        })
        return (
            <ul>
                {content}
            </ul>
        )
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