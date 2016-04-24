import { LOAD_HOME_EVENTS, LOAD_HOME_EVENTS_SUCCESS, LOAD_HOME_EVENTS_ERROR } from "../actions/home";
import map from "lodash/map";

const INITIAL_STATE = {};

const homeReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        
        case LOAD_HOME_EVENTS:
            return {
                ...state,
                loading: true,
                error: false
            }
        case LOAD_HOME_EVENTS_SUCCESS:
        
            return {
                ...state,
                error: false,
                loading: false,
                eventIds: map(action.events, 'id') //We only store event ids so that we can store all events in the events reducer
            }
        
        case LOAD_HOME_EVENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        
        default: 
            return state;
    }
    
}

export default homeReducer;