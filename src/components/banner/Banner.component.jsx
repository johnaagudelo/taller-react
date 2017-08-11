import React from 'react'
import logo from './logo.svg';
import './Banner.css'

import { connect } from 'react-redux'

function Banner(props){
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{ props.title }</h2>
        </div>
    )
}

function mapStateToProps(state){
    console.log(state)
    return {
        title: state.header.title
    }
}

export default connect(mapStateToProps)(Banner)