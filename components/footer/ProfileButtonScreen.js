import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Profile = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.profileContainer}
            onPress={() => { navigation.navigate('Profile') }}
        >
            <FontAwesome5 name="user" size={24} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center',
    }
});