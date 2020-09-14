import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import reactotron from 'reactotron-react-native';


const GoldValue = () => {
    const goldValue = useSelector(state => state.gold.gold);
    return (
        <Text style={styles.goldCounter}>{goldValue}</Text>
    )
}

export const Gold = () => {

    return (
        <View style={styles.goldContainer}>
            <FontAwesome5 name="coins" size={24} color="yellow" />
            <GoldValue />
        </View>
    );
};

const styles = StyleSheet.create({
    goldContainer: {
        width: Dimensions.get('window').width / 6,
        backgroundColor: '#24302b',
        borderRadius: 3,
        borderColor: '#ccc',
        borderWidth: 1,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    goldCounter: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        paddingHorizontal: 10,
    }
});