import util from '../util/request'

function setData(data){
    return {
        type: 'SET_DATA',
        payload: {
            shows: data
        }
    }
}

function getData(){
    return async (dispatch, state) => {
        const data = await util.getShows() 
        dispatch(setData(data))
    }
}

export default {
    setData,
    getData
}