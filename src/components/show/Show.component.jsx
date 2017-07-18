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
    }

    async componentWillMount() {
        const shows = await util.getShows()
        this.setState({
            shows,
            loading: false
        })
    }

    SearchShow(value) {
        this.setState({ 
            shows: value 
        })
    }

    render() {
        return (
            <div>
                <Search name={this.state.name} onShowInput={this.SearchShow} />
                <section>
                    {
                        this.state.shows.map(show => {
                            return (
                                <div key={show.id}>
                                    <img src={show.show.image.medium} alt={show.show.name} />
                                    <div>{show.show.name}</div>
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