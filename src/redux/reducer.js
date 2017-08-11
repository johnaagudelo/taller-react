import initialState from './initialState';
import { combineReducers } from 'redux'

var reducerShows = (state = initialState.shows, action = {}) =>{
    switch (action.type) {
        case 'SET_DATA':
            /*return Object.assign({}, state, {
                header: Object.assign({}, state.header),
                shows: state.shows.concat(action.payload.shows)
            })*/
            return state.concat(action.payload.shows)
        default:
            return state
    }
}

var reducerHeader = (state = initialState.header, action = {}) => {
    return state
}

var reducer = combineReducers({
    header: reducerHeader,
    shows: reducerShows
})

export default reducer;