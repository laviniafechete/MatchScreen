import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


class Friends extends Component {
    render() {
        return (
            <View style={styles.friendsContainer}>
                <FontAwesome5 name="users" size={24} color="white" />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    friendsContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center'
    }
});

export default Friends;