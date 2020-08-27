import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export const Energy = () => {
    return (
        <View style={styles.energyContainer}>
            <FontAwesome name="flash" size={24} color="#2dc129" />
            <Text style={styles.energyCounter}>50/50</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    energyContainer: {
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
    energyCounter: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        paddingHorizontal: 10,
    }
});