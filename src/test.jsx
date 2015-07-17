
class Child extends React.Component {
    constructor(props)     {
        super(props);
        this.state = {items : [{key : "key1", value: "value1"},
                                {key : "key2", value: "value2"}],
                     counter : 0};
    }

    render() {
        let content =  this.state.items.map(item => {
            return <li className="child">
                I am: {item.key} and {this.props.firstName}
            </li>
        })
        return (
            <ul>
                {content}
                <li>
                    <button type="button" onClick={this.handleClick.bind(this)} value="Click me">Click me</button>
                </li>
            </ul>
        )
    }

    handleClick() {
        let newCounter = this.state.counter + 1;
        this.state.items.push({key: "key" + newCounter, value: "value" + newCounter});
        this.setState( {items : this.state.items, counter: newCounter});
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