import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const Bell = props => {
    return (
        <View style={styles.bellContainer}>
            <FontAwesome name="bell" size={24} color="yellow" />
        </View>
    );
};

const styles = StyleSheet.create({
    bellContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center',
    }
});

export default Bell;