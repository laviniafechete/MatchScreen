import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Messages = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.messageContainer}
            onPress={() => { navigation.navigate('Messages') }}
        >
            <FontAwesome5 name="facebook-messenger" size={24} color="#ccc" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center'
    }
});