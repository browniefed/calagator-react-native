import { combineReducers } from "redux";

import events from "./events";
import venues from "./venues";
import home from "./home";

const rootReducers = combineReducers({
    events,
    venues,
    home
});

export default rootReducers;