import { NavigationExperimental } from "react-native";

const { StateUtils } = NavigationExperimental;

import Home from './containers/home';
import Venues from "./containers/venues";
import Events from "./containers/events";
import Event from "./containers/event";
import Venue from "./containers/venue";

const COMPONENTS = {
    'home': Home,
    'venues': Venues,
    'events': Events,
    'event': Event,
    'venue': Venue
}

const getRoute = (routeName, props = {}) => {
    return {
        key: routeName,
        component: COMPONENTS[routeName],
        props: props
    }
}

const homeRoute = {
    index: 0,
    key: 'main',
    children: [
        {
            key: 'home',
            component: Home,
        }
    ]
}

function routeReducer(initialState) {
  return (currentState, action) => {
    switch (action.type) {
      case 'RootContainerInitialAction':
        return initialState;

      case 'push':
        return StateUtils.push(currentState, {key: action.key, component: action.component, props: action.props });

      case 'back':
      case 'pop':
        return currentState.index > 0 ?
          StateUtils.pop(currentState) :
          currentState;

      default:
        return currentState;
    }
  };
}

export { getRoute, homeRoute, routeReducer};