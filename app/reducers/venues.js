import { LOAD_VENUES_SUCCESS } from "../actions/venues";
import each from "lodash/each";
import filter from "lodash/filter";

const INITIAL_STATE = {}

const venuesReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        
        case LOAD_VENUES_SUCCESS:
            const _state = {
                ...state
            }
            
            return filter(
                        each(action.venues, venue => {
                            if (!venue) return;
                            _state[venue.id] = venue
                        }), 
                        (venue) => !!venue
                    );
            
            
        default: 
            return state;
            
    }
}

export default venuesReducer;