import React, { Component } from 'react'

export default class ClassCom extends Component {
    constructor(props) {
        super();
        this.state = { count: 0, name: "sumit" };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    componentDidMount() {
        console.log("mounting");
    }
    componentDidUpdate() {
        console.log("updating");
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <h1>ClassCom</h1>
                <h1>{this.state.count}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.increment} >+</button>
                <button onClick={this.decrement} >-</button>
            </div>
        )
    }
}
