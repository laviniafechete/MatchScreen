import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView, } from 'react-native';

import Reactotron from "reactotron-react-native"

import TopMatch from './TopMatch';
import Players from './Players';
import Match from './Match';

import matchJSON from './matchJSON'


const MatchItem = () => matchJSON.map((item, index) => {
    state = {
        activeIndexMatch: 0
    }

    const isActive = index === this.state.activeIndexMatch

    // onChange = (activeIndexMatch) => {
    //     this.setState({
    //         activeIndexMatch,
    //     })
    // }

    return (
        <Match
            // onChange={(activeIndexMatch) => this.setState({ activeIndexMatch })}
            key={index}
            name={item.name}
            score={item.score}
            index={index}
            isActive={isActive}
        />
    );
})

export class Body extends Component {
    state = {
        isLoading: true,
        message: '',
        activeIndexMatch: 0,
    };

    componentDidMount() {
        this.loaderTime = setTimeout(
            () => this.loader(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.loaderTime)
    }

    loader = () => {
        this.setState({
            isLoading: false
        })
    };

    onChange = (activeIndexMatch) => {
        this.setState({
            activeIndexMatch,
        })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="small" color="#fff" />
                </View>
            );
        }
        return (
            <View style={styles.bodyContainer}>
                <TopMatch parentCallback={this.callbackFunction} />
                <Players />
                <ScrollView>
                    <MatchItem
                        onChange={this.onChange}
                    //onChange={(activeIndexMatch) => this.setState({ activeIndexMatch })}
                    //isActive={isActive}
                    />
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyContainer: {
        flex: 1,
    },
});

