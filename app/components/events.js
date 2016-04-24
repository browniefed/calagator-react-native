import React, { Component, ListView, View, Text } from "react-native";

import EventItem from "./eventitem"

export default class EventsList extends Component {
    
    render() {
        const { ds, onEventPress } = this.props;
        
        return (
            <ListView
                enableEmptySections={true}
                dataSource={ds}
                renderRow={(eventData) => <EventItem {...eventData} onEventPress={() => onEventPress(eventData)} />}
            />
        )
    }
}

