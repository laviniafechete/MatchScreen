import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Bell = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.bellContainer}
            onPress={() => { navigation.navigate('Notifications') }}
        >
            <FontAwesome name="bell" size={24} color="yellow" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bellContainer: {
        width: Dimensions.get('window').width / 5,
        alignItems: 'center',
    }
});