import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


class Club extends Component {
    render() {
        return (
            <View style={styles.clubContainer}>
                <FontAwesome5 name="shield-alt" size={24} color="red" />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    clubContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center'
    }
});

export default Club;