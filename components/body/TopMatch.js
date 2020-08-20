import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';


class TopMatch extends Component {
    sendData = () => {
        let message = 'Hello, parent!'
        this.props.parentCallback(message);
    }

    render() {
        return (
            <View style={styles.topMatchContainer}>
                <ImageBackground source={require('../../assets/topMatchBg.png')} style={styles.backround}>
                    <View style={styles.matchContainer}>
                        <Image source={require('../../assets/leftArrow.png')} style={styles.arrowLeft} />
                        <View style={styles.clubContainer}>
                            <Image source={require('../../assets/club1.png')} style={styles.clubImage} />
                            <Text style={styles.clubName}>DINAMO</Text>
                        </View>
                        <View style={styles.timerContainer}>
                            <Image source={require('../../assets/clock.png')} style={styles.clock} />
                            <Text style={styles.time}>17:30</Text>
                        </View>
                        <View style={styles.clubContainer}>
                            <Image source={require('../../assets/club2.png')} style={styles.clubImage} />
                            <Text style={styles.clubName}>STEAUA FORCE</Text>
                        </View>
                    </View>
                    {/* <View style={{ flex: 1, alignItems: 'center' }} >
                        <Button style={{ width: 200 }} title='Send msg to parent' onPress={this.sendData} />
                    </View> */}
                </ImageBackground>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    topMatchContainer: {
        flexDirection: 'row',
    },
    backround: {
        flex: 1,
        //resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        padding: 7,
    },
    matchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowLeft: {
        width: 20,
        height: 32
    },
    clubContainer: {
        width: 100,
        alignItems: 'center'
    },
    clubImage: {
        width: 40,
        height: 48,
        marginBottom: 10,
    },
    clubName: {
        color: '#fff',
        textAlign: 'center',
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#252525',
        borderRadius: 5,
        marginHorizontal: 10,
        top: -10,
    },
    clock: {
        width: 22,
        height: 22
    },
    time: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 2,
        color: 'white'
    }
});

export default TopMatch;