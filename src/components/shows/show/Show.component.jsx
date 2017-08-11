import React from 'react'

export default function Show(props){
    return (
        <article className="show" key={props.id}>
            <img src={props.show.image.medium} alt={props.show.name} />
            <div className="show-name" >{props.show.name}</div>
            <div>{props.show.schedule.time}</div>
            <div>{props.show.language}</div>
        </article>
    )
}