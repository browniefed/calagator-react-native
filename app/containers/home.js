import React, { Component, View, Text, StyleSheet, ListView } from "react-native";
import { connect } from "react-redux";
import map from "lodash/map";


import { getRoute } from "../routes";

import Loading from "../components/loading";
import EventList from "../components/events";

import { loadHomeEvents } from "../actions/home";

import COLORS from "../colors";


class HomeContainer extends Component {
    constructor(props, context) {
        super(props, context);
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            ds: ds.cloneWithRows([])
        }
        
        this._handleEventPress = this._handleEventPress.bind(this);
    }
    
    componentWillMount() {
        this.props.loadHomeEvents();
    }
    
    componentWillReceiveProps(nextProps) {
        const { ds } = this.state;
        
        if (this.props.events !== nextProps.events) {
            this.setState({
                ds: ds.cloneWithRows([
                    ...nextProps.events
                ])
            });
        }
    }
    
    _handleEventPress(event) {
        const { onNavigate } = this.props;
        onNavigate({
            type: 'push',
            ...getRoute('event', {
                id: event.id
            })
        })
    }
    
    render() {
        const { loading, error, events } = this.props;
        const { ds } = this.state;
        
        let contentStyles = [styles.content];
        if (loading) {
            contentStyles = [...contentStyles, styles.center];
        }
        
        return (
            <View style={styles.container}>
                <View style={[styles.header, styles.center]}>
                    <Text style={styles.headerText}>Calagator</Text>
                </View>
                <View style={contentStyles}>
                    { loading ? <Loading /> : null }
                    { !loading ? <EventList ds={ds} onEventPress={this._handleEventPress} /> : null }
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
        flex: 1,
        backgroundColor: COLORS.main,
        borderBottomWidth: 10,
        borderBottomColor: COLORS.accent
    },
    content: {
        flex: 4
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'   
    },
    
    headerText: {
        color: "#FFF",
        fontSize: 30
    }
})

const mapStateToProps = (state) => {
    return {
        loading: state.home.loading,
        error: state.home.error,
        events: map(state.home.eventIds, eventId => state.events[eventId]) //We rebuild our events array from a combination of the events and our eventIds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadHomeEvents: () => dispatch(loadHomeEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);