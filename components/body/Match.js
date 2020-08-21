import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Reactotron from "reactotron-react-native"

import MatchPlayers from './MatchPlayers';
import MatchScore from './MatchScore';
import { logUnequalProps } from '../helpers';

class Match extends React.PureComponent {


    componentDidUpdate(prevProps) {
        logUnequalProps(prevProps, this.props)
    }

    bgChange = () => {
        if (this.props.index % 2 === 0) return true
    };

    bgMatch = () => {
        if (this.props.isActive) {
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
            <TouchableWithoutFeedback
                onPress={() => this.props.onChange(this.props.index)}
            >
                <View style={[this.bgChange() ? styles.bgChange : styles.matchContainer, this.bgMatch()]}>
                    <MatchPlayers name={this.props.name.name1} />
                    <MatchScore isActive={this.props.isActive} index={this.props.index} score={this.props.score} />
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