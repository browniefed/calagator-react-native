import React, { Component, View, StyleSheet, NavigationExperimental } from "react-native";
import { Provider } from "react-redux";
import { getRoute, homeRoute, routeReducer} from "./routes";

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  RootContainer: NavigationRootContainer,
} = NavigationExperimental;



import store from "./store";

const mainReducer = routeReducer(homeRoute);

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        
        this._renderNavigation = this._renderNavigation.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }
    
    _renderNavigation(navigationState, onNavigate) {
        return (
        <NavigationCardStack
            direction="horizontal"
            navigationState={navigationState}
            onNavigate={onNavigate}
            style={styles.container}
            renderScene={this._renderScene}
        />
        );
    }
    
    

  _renderScene(props) {
    const { navigationState: { children }, scene: { index }, scenes} = props;
    const { component: Comp, props: passProps } = scenes[index].navigationState
    
    return (
      <View style={styles.container}>
        <Comp 
            {...props}
            {...passProps}
        />
      </View>
    );
  }
    
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <NavigationRootContainer
                        reducer={mainReducer}
                        renderNavigation={this._renderNavigation}
                        style={styles.container}
                    />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    }
});