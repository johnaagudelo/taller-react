import React, { Component } from 'react'
import logo from './logo.svg';
import './Banner.css'

class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{ this.props.title }</h2>
            </div>
        )
    }
}

export default Banner