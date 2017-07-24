import React, { Component } from 'react'
import './Show.css'
import util from '../../util/request.js'
import Search from '../search/Search.component'

class Show extends Component {
    constructor() {
        super()

        this.state = {
            search: "",
            shows: [],
            loading: true
        }

        this.SearchShow = this.SearchShow.bind(this)
        this.shows = this.shows.bind(this)
    }

    componentWillMount() {
        this.shows()
    }

    async shows(filter = ''){
        let shows = await util.getShows()
        if (filter) {
            shows = shows.filter(show => show.show.name.toLowerCase().includes(filter.toLowerCase()))
        }
        this.setState({
            shows,
            loading: false
        })
    }

    SearchShow(value) {
        this.shows(value)
    }

    render() {
        return (
            <div className="Container" >
                <Search name={this.state.name} onShowInput={this.SearchShow} />
                <section className="shows">
                    {
                        this.state.shows.map(show => {
                            return (
                                <div className="show" key={show.id}>
                                    <img src={show.show.image.medium} alt={show.show.name} />
                                    <div className="show-name" >{show.show.name}</div>
                                    <div>{show.show.schedule.time}</div>
                                    <div>{show.show.language}</div>
                                </div>
                            )
                        })
                    }
                </section>
            </ div>
        )
    }
}

export default Show