import {FETCHING_SMURFS_ERROR, FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, ADD_SMURF, ADD_SMURF_ERROR,DELETE_SMURF, DELETE_SMURF_ERROR} from '../actions/index'


export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}


export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCHING_SMURFS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF:
            console.log(action.payload)
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case ADD_SMURF_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case DELETE_SMURF_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary