import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


class Messages extends Component {
    render() {
        return (
            <View style={styles.messageContainer}>
                <FontAwesome5 name="facebook-messenger" size={24} color="#ccc" />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    messageContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center'
    }
});

export default Messages;