import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


export const Skill = () => {
    return (
        <View style={styles.skillContainer}>
            <View style={styles.valuesContainer}>
                <View style={styles.valueContainer}>
                    <FontAwesome name="star" size={16} color="yellow" />
                    <Text style={styles.levelBold}>39</Text>
                </View>
                <View style={styles.valueContainer}>
                    <Text style={styles.level}>112K/152K</Text>
                    <FontAwesome name="asterisk" size={16} color="orange" />
                </View>
            </View>
            <View style={styles.levelContainer}>
                <View style={styles.completedLevel}></View>
                <View style={styles.remainLevel}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    skillContainer: {
        width: Dimensions.get('window').width / 3,
        marginRight: 10,
    },
    valuesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    levelBold: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 2,
        fontSize: 12,
    },
    level: {
        color: 'white',
        marginLeft: 2,
        fontSize: 12,
    },
    levelContainer: {
        width: '100%',
        borderRadius: 5,
        height: 3,
        marginTop: 2,
        backgroundColor: '#ccc'
    },
    completedLevel: {
        width: '60%',
        backgroundColor: '#facc1c',
        flex: 1,
    }
});