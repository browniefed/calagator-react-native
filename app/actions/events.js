
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_ERROR = 'LOAD_EVENTS_ERROR';

export const receiveEvents = () => {
    return {
        type: LOAD_EVENTS
    }
}

export const receiveEventsSuccess = (events) => {
    return {
        type: LOAD_EVENTS_SUCCESS,
        events
    }
}

export const receiveEventsError = () => {
    return {
        type: LOAD_EVENTS_ERROR
    }
}