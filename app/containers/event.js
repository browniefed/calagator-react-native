import React, { Component, View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, Platform } from "react-native";
import ParsedText from "react-native-parsed-text";
import { connect } from "react-redux";
import MapView from 'react-native-maps';

import {getDayOfWeek, getDate, getTime } from "../utils/date";

import Colors from "../colors";

const openURL = (url) => {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => alert('An error occurred', err));

}

const handleUrlPress = (url) => {
    openURL(url);   
}

const handleEmailPress = (email) => {
    openURL(`mailto:${email}`);
}

const handlePhonePress = (phone) => {
    openURL(`tel:${phone}`);
}

const handleOpenMap = (coordinates) => {
    let url = '';
    if (Platform.OS === 'ios') {
        url = `http://maps.apple.com/?ll=${coordinates.latitude},${coordinates.longitude}`;
    } else {
        url = `geo:${coordinates.latitude},${coordinates.longitude}`;
    }
    openURL(url);
}

class EventContainer extends Component {
    render() {
        const {
            title,
            start_time,
            end_time,
            description,
            venue: {
                title: venueTitle,
                address,
                latitude,
                longitude
            },
            venue_details
        } = this.props;
        
        const startDay = getDayOfWeek(start_time);
        const startDate = getDate(start_time);
        const startTime = getTime(start_time);
        
        const endDay = getDayOfWeek(end_time);
        const endDate = getDate(end_time);
        const endTime = getTime(end_time);
        
        const coordinates = {
                latitude: parseFloat(latitude, 10),
                longitude: parseFloat(longitude, 10),
        }
        
        return (
            <View style={styles.container}>
                <View style={[styles.header, styles.center]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{`${startDay} ${startDate} ${startTime} - ${endTime}`}</Text>
                    {startDate !== endDate ? <Text style={styles.date}>{`${endDay} ${endDate} ${startTime} - ${endTime}`}</Text> : null }
                </View>
                <View style={styles.content}>
                    <ScrollView contentContainerStyle={styles.scroll}>
                        <View style={[styles.whiteBox, styles.spacer]}>
                            <Text style={styles.venueTitle}>{venueTitle}</Text>
                            <View style={styles.spacer}>
                                <TouchableOpacity onPress={() => handleOpenMap(coordinates)}>
                                    <Text style={styles.address}>{address}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.venueDetails, styles.spacer]}>{venue_details}</Text>
                            
                            <TouchableOpacity onPress={() => handleOpenMap(coordinates)}>
                                <View style={styles.mapContainer}>
                                    <MapView
                                        style={styles.map}
                                        initialRegion={{
                                            ...coordinates,
                                            latitudeDelta: 0.004,
                                            longitudeDelta: 0.004,
                                        }}
                                    >
                                        <MapView.Marker 
                                            coordinate={coordinates}
                                        />
                                    </MapView>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.whiteBox}>
                            <ParsedText
                                style={styles.text}
                                parse={
                                    [
                                    {type: 'url',                       style: styles.url, onPress: handleUrlPress},
                                    {type: 'phone',                     style: styles.phone, onPress: handlePhonePress},
                                    {type: 'email',                     style: styles.email, onPress: handleEmailPress},
                                    ]
                                }
                            >
                                {description}
                            </ParsedText>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: Colors.main,
        flex: 1,
        padding: 5
    },
    content: {
        flex: 3
    },
    scroll: {
        padding: 10
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center'  
    },
    title: {
        color: '#FFF',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10
    },
    date: {
        color: '#FFF',
        fontSize: 16
    },
    venueTitle: {
        fontSize: 20,
        color: '#111'
    },
    address: {
        fontSize: 16,
        color: '#333'    
    },
    venueDetails: {
        fontSize: 12,
        color: "#333"  
    },
    whiteBox: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#AAA',
        borderRadius: 3,
        padding: 10
    },
    spacer: {
      marginBottom: 10  
    },
    url: {
        color: 'red',
        textDecorationLine: 'underline',
    },
    email: {
        textDecorationLine: 'underline',
    },
    text: {
        color: 'black',
        fontSize: 15,
    },
    phone: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mapContainer: {
        height: 100
    }
})

const mapStateToProps = (state, props) => {
    return {
        ...state.events[props.id]
    }
}

export default connect(mapStateToProps)(EventContainer);