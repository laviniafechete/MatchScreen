import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Club = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.clubContainer}
            onPress={() => { navigation.navigate('Club') }}
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

export default Club;