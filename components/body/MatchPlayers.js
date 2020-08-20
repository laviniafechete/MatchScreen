import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



class MatchPlayers extends Component {
    render() {
        return (
            <View style={styles.matchPlayersContainer}>
                <View style={styles.players}>
                    <Image source={require('../../assets/player2.png')} style={styles.biggerImg} />
                    <Image source={require('../../assets/player1.png')} style={styles.smallerImg} />
                    <Text style={styles.playerName}>{this.props.name}</Text>
                </View>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    matchPlayersContainer: {
    },
    players: {
        width: 100,
        alignItems: 'center',
        //textAlign: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 10,
    },
    biggerImg: {
        width: 30,
        height: 36,
    },
    smallerImg: {
        width: 20,
        height: 26,
        position: 'absolute',
        top: 20,
        left: 20,
    },
    playerName: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
    },
});

export default MatchPlayers;