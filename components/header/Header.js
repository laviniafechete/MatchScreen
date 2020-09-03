import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Skill } from './Skill'
import { Gold } from './Gold'
import { Energy } from './Energy'
import { Gloves } from './Gloves';


export const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Skill />
            <Gold />
            <Energy />
            <Gloves />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#232528',
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        zIndex: 1,
    }
});