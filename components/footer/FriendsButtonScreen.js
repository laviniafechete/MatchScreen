import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export const Friends = ({ navigation }) => {
    return (
        < TouchableOpacity style={styles.friendsContainer} onPress={() => {
            navigation.navigate('Friends')
        }}>
            <FontAwesome5 name="users" size={24} color="white" />
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    friendsContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center'
    }
});