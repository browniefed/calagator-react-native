import React, { Component, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {getDayOfWeek, getDate, getTime } from "../utils/date";


export default class EventItem extends Component {
    render() {
        const { start_time, end_time, title, onEventPress } = this.props;
        
        const startDay = getDayOfWeek(start_time);
        const startDate = getDate(start_time);
        const startTime = getTime(start_time);
        
        const endDay = getDayOfWeek(end_time);
        const endDate = getDate(end_time);
        const endTime = getTime(end_time);
        
        return (
            <TouchableOpacity onPress={onEventPress}>
                <View style={[styles.container, styles.border, styles.shadow]}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.date}>{`${startDay} ${startDate} ${startTime} - ${endTime}`}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin: 5,
      backgroundColor: '#FFF'
    },
    border: {
      borderWidth: 1,
      borderColor: '#AAA',
      borderRadius: 3
    },
    shadow: {
      shadowColor: 'rgba(0,0,0,.25)',
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1},
      shadowOpacity: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 5
    },
    date: {
        fontSize: 12
    }
})