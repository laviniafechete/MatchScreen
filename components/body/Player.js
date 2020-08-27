import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Animated } from 'react-native';

export class Player extends Component {

    bgChange = () => {
        if (this.props.index % 2 === 0) return true
    };

    render() {
        const { height: wHeight } = Dimensions.get("window");
        const CARD_HEIGHT = 43
        const height = wHeight - 43
        const position = Animated.subtract(this.props.index * CARD_HEIGHT, this.props.y);
        const isDisappearing = -CARD_HEIGHT;
        const isTop = 0;
        const isBottom = height - CARD_HEIGHT;
        const isAppearing = height;
        const translateY = Animated.add(
            Animated.add(
                this.props.y,
                this.props.y.interpolate({
                    inputRange: [0, 0.00001 + this.props.index * CARD_HEIGHT],
                    outputRange: [0, - this.props.index * CARD_HEIGHT],
                    extrapolateRight: "clamp",
                })
            ),
            position.interpolate({
                inputRange: [isBottom, isAppearing],
                outputRange: [0, -CARD_HEIGHT / 4],
                extrapolate: "clamp",
            })
        );
        const scale = position.interpolate({
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
            extrapolate: "clamp",
        });
        const opacity = position.interpolate({
            inputRange: [isDisappearing, isTop, isBottom, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
        });

        return (
            <Animated.View style={[this.bgChange() ? styles.playerContainer : styles.bg, { opacity, transform: [{ translateY }, { scale }] }]}>
                <View style={styles.posContainer}>
                    <Text style={styles.posText}>{this.props.index + 1 + "."}</Text>
                    <Image source={this.props.data.country === 'aus' ? require('../../assets/flag1.png') : require('../../assets/flag2.png')} style={styles.flag} />
                </View>
                <View style={styles.playerData}>
                    <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
                    <Text style={styles.playerName}>{this.props.data.name.substring(0, 7) + "..."}</Text>
                </View>
                <View style={styles.levelContainer}>
                    <Image source={require('../../assets/star.png')} style={styles.star} />
                    <Text style={styles.level}>{this.props.data.level}</Text>
                </View>
                <View style={styles.teamContainer}>
                    <Image source={require('../../assets/team.png')} style={styles.team} />
                </View>
                <View style={styles.goalsContainer}>
                    <Image source={require('../../assets/ball.png')} style={styles.ball} />
                    <Text style={styles.goals}>{this.props.data.goals}</Text>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    playerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#293141',
        paddingVertical: 10,
        justifyContent: 'center',
        //marginVertical: 10,
    },
    bg: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1e24',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    posContainer: {
        width: Dimensions.get('window').width / 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    posText: {
        color: '#838b93',
        fontSize: 12,
    },
    flag: {
        width: 25,
        height: 15,
        marginLeft: 5
    },
    playerData: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width / 3
    },
    avatar: {
        width: 35,
        aspectRatio: 78 / 95,
        marginRight: 6
    },
    playerName: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    levelContainer: {
        width: Dimensions.get('window').width / 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        width: 25,
        height: 25,
        marginRight: 3
    },
    level: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    teamContainer: {
        width: Dimensions.get('window').width / 7,
        alignItems: 'center',
    },
    team: {
        width: 25,
        height: 30,
    },
    goalsContainer: {
        width: Dimensions.get('window').width / 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ball: {
        width: 20,
        height: 20,
        marginRight: 3
    },
    goals: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});