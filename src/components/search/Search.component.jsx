import React from 'react'
import './search.css'

export default function(props){
    return (
        <input className="input" type="text" value={props.name}  onChange={ props.onShowInput } placeholder="buscar"/>
    )
}