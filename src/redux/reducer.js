import action from './actions';
import initialState from './initialState';

var reducerShow = function(state = initialState.shows, action){
    switch (action.type) {
        case 'FILTER':
            console.log(state)
            return state;
            break;
    
        default:
            return state
    }
}

export default reducerShow;