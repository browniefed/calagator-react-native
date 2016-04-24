import API from "../api";
import map from "lodash/map";
import { receiveEventsSuccess } from "./events";
import { receiveVenuesSuccess } from "./venues";

export const LOAD_HOME_EVENTS = 'LOAD_HOME_EVENTS';
export const LOAD_HOME_EVENTS_SUCCESS = 'LOAD_HOME_EVENTS_SUCCESS';
export const LOAD_HOME_EVENTS_ERROR = 'LOAD_HOME_EVENTS_ERROR';

export const loadHomeEvents = () => {
    
    return (dispatch, getState) => {
        dispatch(receiveHomeEvents());
        
        API.loadEvents().then(data => {
            dispatch(receiveEventsSuccess(data));
            dispatch(receiveVenuesSuccess(map(data, "venue")));
            dispatch(receiveHomeEventsSuccess(data));
        }).catch(() => {
            dispatch(receiveHomeEventsError());
        })
    }
    
}

const receiveHomeEvents = () => {
    return {
        type: LOAD_HOME_EVENTS
    }
}

const receiveHomeEventsSuccess = (events) => {
    return {
        type: LOAD_HOME_EVENTS_SUCCESS,
        events
    }
}

const receiveHomeEventsError = () => {
    return {
        type: LOAD_HOME_EVENTS_ERROR
    }
}