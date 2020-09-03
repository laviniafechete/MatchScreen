import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Match = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.clubContainer}
            onPress={() => { navigation.navigate('Match') }}
        >
            <FontAwesome5 name="shield-alt" size={24} color="red" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    clubContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center'
    }
});