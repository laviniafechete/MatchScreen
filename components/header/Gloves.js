import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


class Gloves extends Component {
    render() {
        return (
            <View style={styles.glovesContainer}>
                <FontAwesome name="hand-peace-o" size={20} color="#fff" />
                <FontAwesome name="hand-stop-o" size={20} color="#3c4f47" />
                <FontAwesome name="hand-stop-o" size={20} color="#3c4f47" />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    glovesContainer: {
        width: Dimensions.get('window').width / 6,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Gloves;