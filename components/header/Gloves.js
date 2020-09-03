import React from 'react';
import { View, Dimensions, StyleSheet, Animated } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


export class Gloves extends React.Component {
    state = {
        animation: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(
            this.state.animation,
            {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }
        ).start();
        //sssetTimeout(() => { this.setState({ animation: { toValue: 0, duration: 1500, useNativeDriver: true } }) }, 1500)
    }

    render() {
        const animationStyles = {
            opacity: this.state.animation
        }

        return (
            <View style={styles.glovesContainer}>
                <Animated.View style={animationStyles}>
                    <FontAwesome name="hand-peace-o" size={20} color="#fff" />
                </Animated.View>
                <FontAwesome name="hand-stop-o" size={20} color="#3c4f47" />
                <FontAwesome name="hand-stop-o" size={20} color="#3c4f47" />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    glovesContainer: {
        width: Dimensions.get('window').width / 6,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});