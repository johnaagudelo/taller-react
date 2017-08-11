import React, { Component } from 'react'
import './Shows.css'

import Search from '../search/Search.component'
import Show from './show/Show.component'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions.js'

class Shows extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: " ",
            loading: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.Loadshows = this.Loadshows.bind(this)
    }

    componentDidMount() {
        this.Loadshows()
    }

    async Loadshows(){
        await this.props.actions.getData()
        this.setState({
            loading: false
        })
    }

    handleChange(e){
        let value = e.target.value
        this.setState({
            search: value
        })
    }

    render() {
        return (
            <div className="Container" >
                <Search name={this.state.name} onShowInput={this.handleChange} />
                <section className="shows">
                    {
                        this.props.shows.map(show => {
                            if(show.show.name.toLowerCase().includes(this.state.search.toLowerCase())){
                                return (
                                    <Show key={show.id} {...show }/>
                                )
                            }
                            return "";
                        })
                    }
                </section>
                {this.state.loading && (<h4>Loading...</h4>)}
            </ div>
        )
    }
}

function mapStateToProps(state){
    return{
        shows: state.shows
    }
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(actions, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows)