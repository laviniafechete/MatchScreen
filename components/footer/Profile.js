import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


class Profile extends Component {
    render() {
        return (
            <View style={styles.profileContainer}>
                <FontAwesome5 name="user" size={24} color="white" />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    profileContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center',
    }
});

export default Profile;