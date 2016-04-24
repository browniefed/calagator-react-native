import React, { Component, Platform, ActivityIndicatorIOS, ProgressBarAndroid } from "react-native";


export default class Loading extends Component {
    render() {
        if (Platform.OS === 'ios') {
            return (
                <ActivityIndicatorIOS
                    animating={true}
                    size="large"
                />
            )
        } else if (Platform.OS === 'android') {
            return (
                <ProgressBarAndroid styleAttr="Large" />
            )
        }
    }
}