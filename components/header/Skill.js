import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export class Skill extends React.Component {
    state = {
        animation: new Animated.Value(0),
        spin: new Animated.Value(0)
    }

    spins() {
        Animated.timing(
            this.state.spin,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.spins());
    }

    componentDidMount() {
        Animated.timing(
            this.state.animation,
            {
                toValue: 550,
                duration: 1500,
                useNativeDriver: true,
            }
        ).start();
        setTimeout(() => { this.setState({ animation: { toValue: 0, duration: 1500, useNativeDriver: true } }) }, 1500);
        this.spins()
    }

    render() {
        const animationStyles = {
            transform: [
                { translateY: this.state.animation }
            ]
        }

        const spining = this.state.spin.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })


        return (
            <View style={styles.skillContainer} >
                <View style={styles.valuesContainer}>
                    <View style={styles.valueContainer}>
                        <Animated.View style={animationStyles}>
                            <FontAwesome name="star" size={16} color="yellow" />
                        </Animated.View>
                        <Text style={styles.levelBold}>39</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.level}>112K/152K</Text>
                        <Animated.View style={{ transform: [{ rotate: spining }] }}>
                            <FontAwesome name="asterisk" size={16} color="orange" />
                        </Animated.View>
                    </View>
                </View>
                <View style={styles.levelContainer}>
                    <View style={styles.completedLevel}></View>
                    <View style={styles.remainLevel}></View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    skillContainer: {
        width: Dimensions.get('window').width / 3,
        marginRight: 10,
    },
    valuesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    levelBold: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 2,
        fontSize: 12,
    },
    level: {
        color: 'white',
        marginLeft: 2,
        fontSize: 12,
    },
    levelContainer: {
        width: '100%',
        borderRadius: 5,
        height: 3,
        marginTop: 2,
        backgroundColor: '#ccc'
    },
    completedLevel: {
        width: '60%',
        backgroundColor: '#facc1c',
        flex: 1,
    }
});