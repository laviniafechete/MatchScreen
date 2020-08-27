import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';

export const Players = () => {
    return (
        <ImageBackground source={require('../../assets/playersBg.png')} style={styles.backround}>
            <View style={styles.playersContainer}>
                <View style={styles.team}>
                    <Text style={styles.players}>Players</Text>
                    <Image style={styles.blueInfluence} source={require('../../assets/blueInfluence.png')} />
                </View>
                <View style={styles.leagueType}>
                </View>
                <View style={styles.team}>
                    <Image style={styles.redInfluence} source={require('../../assets/redInfluence.png')} />
                    <Text style={styles.players}>Players</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    playersContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    backround: {
        width: '100%',
        height: 30
    },
    team: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    players: {
        color: '#919499',
        marginHorizontal: 10,
        fontSize: 12,
    },
    blueInfluence: {
        width: 19,
        height: 10,
        marginRight: 30,
    },
    redInfluence: {
        width: 19,
        height: 10,
        marginLeft: 30,
    },
    leagueType: {
        width: Dimensions.get('window').width / 3,
    }
});