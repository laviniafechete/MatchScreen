import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';


import { FontAwesome } from '@expo/vector-icons';

export class MatchScore extends React.Component {

    state = {
        colorRed: '50%',
        colorBlue: '50%',
    }

    scoreBarCalculator = () => {
        const totalScore = this.props.score.score1 + this.props.score.score2;
        const middle = Math.round(totalScore / 2);
        let redWidth, blueWidth;
        if (this.props.score.score1 < middle) {
            const blueWidthRatio = middle / this.props.score.score1;
            blueWidth = Math.round(2 * blueWidthRatio);
            redWidth = 100 - blueWidth;
        } else {
            const redWidthRatio = this.props.score.score1 / middle;
            redWidth = Math.round(2 * redWidthRatio);
            blueWidth = 100 - redWidth;
        }
        this.setState({ colorBlue: blueWidth + '%', colorRed: redWidth + '%' })
    };

    componentDidMount() {
        this.scoreBarCalculator();
    }

    render() {
        return (
            <View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.touchableArea}>
                        {this.props.isActive &&
                            <ImageBackground style={styles.button} source={require('../../assets/button.png')}>
                                <Text style={styles.buttonText}>VS</Text>
                            </ImageBackground>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.matchScoreContainer} >
                    <View style={styles.score}>
                        <Text style={styles.scoreValue}>{this.props.score.score1}</Text>
                        <Text style={styles.scoreValue}>{this.props.score.score2}</Text>
                    </View>
                    <View style={styles.centerArrow}>
                        <FontAwesome name="caret-down" size={24} color="white" />
                    </View>
                    <View style={styles.scoreBar}>
                        <View style={{ width: this.state.colorBlue, backgroundColor: '#004d99', height: 5 }}></View>
                        <View style={{ width: this.state.colorRed, backgroundColor: '#b80000', height: 5 }}></View>
                    </View>
                </View >
            </View>
        );
    };

};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: -20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        aspectRatio: 301 / 111,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    matchScoreContainer: {
        width: Dimensions.get('window').width / 2
    },
    score: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    scoreValue: {
        color: '#fff',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        bottom: -20,
    },
    centerArrow: {
        alignItems: 'center',
        bottom: -10,
        zIndex: 1,
    },
    scoreBar: {
        flexDirection: 'row',
        flex: 1,
    },
});