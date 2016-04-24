const BASE_API = 'http://calagator.org'

const API = {
    loadEvents: () => {
        return fetch(`${BASE_API}/events.json`).then(res => res.json());
    },
    loadVenues: () => {
        return fetch(`${BASE_API}/venues.json`).then(res => res.json());
    }
}

export default API;