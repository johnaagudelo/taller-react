import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import {  composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const logger = store => next => (action) =>{
    console.group(action.type)
    console.log("dispathing", action)
    const result = next(action)
    console.log("next state", store.getState())
    console.groupEnd(action.type)
    return result
}

const store = createStore(reducer, 
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
);

export default store