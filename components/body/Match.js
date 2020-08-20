import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Reactotron from "reactotron-react-native"

import MatchPlayers from './MatchPlayers';
import MatchScore from './MatchScore';

class Match extends Component {

    state = {
        //showButton: false,
    }

    bgChange = () => {
        if (this.props.index % 2 === 0) return true
    };

    toggleButton = () => {
        this.setState({
            showButton: !this.state.showButton,
            newBg: !this.state.newBg,
        })
    };

    bgMatch = () => {
        if (this.props.newBg && (this.props.indexFlatList === this.props.index)) {
            return {
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }
        }
    }
    render() {
        Reactotron.log('match.js')
        return (
            <TouchableWithoutFeedback onPress={() => this.props.onChange(this.props.index)}>
                <View style={[this.bgChange() ? styles.bgChange : styles.matchContainer, this.bgMatch()]}>
                    <MatchPlayers name={this.props.name.name1} />
                    <MatchScore indexFlatList={this.props.indexFlatList} index={this.props.index} showButton={this.props.showButton} score={this.props.score} />
                    <MatchPlayers name={this.props.name.name2} />
                </View>
            </TouchableWithoutFeedback>
        );
    };
};

const styles = StyleSheet.create({
    matchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },

    bgChange: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
});

export default Match;