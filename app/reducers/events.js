import { LOAD_EVENTS_SUCCESS } from "../actions/events";
import each from "lodash/each";

const INITIAL_STATE = {}

const eventsReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        
        case LOAD_EVENTS_SUCCESS:
            const _state = {
                ...state
            }
            
            each(action.events, event => _state[event.id] = event);
            
            return _state;
        
            
        default: 
            return state;
            
    }
}

export default eventsReducer;