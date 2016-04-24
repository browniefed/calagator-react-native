import API from "../api";

export const LOAD_VENUES = 'LOAD_VENUES';
export const LOAD_VENUES_SUCCESS = 'LOAD_VENUES_SUCCESS';
export const LOAD_VENUES_ERROR = 'LOAD_VENUES_ERROR';

export const loadVenues = () => {
    
    return (dispatch, getState) => {
        dispatch(receiveVenues());
        
        API.loadVenues().then(data => {
            dispatch(receiveVenuesSuccess(data));
        }).catch(() => {
            dispatch(receiveVenuesError());
        });
    }
    
}

export const receiveVenues = () => {
    return {
        type: LOAD_VENUES
    }
}

export const receiveVenuesSuccess = (venues) => {
    return {
        type: LOAD_VENUES_SUCCESS,
        venues
    }
}

export const receiveVenuesError = () => {
    return {
        type: LOAD_VENUES_ERROR
    }
}