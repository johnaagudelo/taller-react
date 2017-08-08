import React, { Component } from 'react'
import './search.css'

class Search extends Component{
    constructor(){
        super()

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        let value = e.target.value
        this.props.onShowInput(value);
    }

    render(){
        return (
            <input className="input" type="text" value={this.props.name}  onChange={ this.handleChange } placeholder="buscar"/>
        )
    }
}

export default Search