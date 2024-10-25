import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <h1>Footer</h1>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}
