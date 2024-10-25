import React, { Component } from 'react'
import Footer from './Footer';

export default class Contact extends Component {
    constructor(props) {
        super();
        this.state = {
            counter: 1,
            name: 'jitender'
        }
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.increment}>increment</button>
                <Footer value={this.state.counter} />
            </div>
        )
    }
}
