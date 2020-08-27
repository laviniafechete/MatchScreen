import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';


export const Gold = () => {
    return (
        <View style={styles.goldContainer}>
            <FontAwesome5 name="coins" size={24} color="yellow" />
            <Text style={styles.goldCounter}>16</Text>
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