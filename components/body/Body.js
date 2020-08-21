import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView, } from 'react-native';

import Reactotron from "reactotron-react-native"

import TopMatch from './TopMatch';
import Players from './Players';
import Match from './Match';

import matchJSON from './matchJSON'

export class Body extends React.PureComponent {

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

    render() {

        const MatchItem = () => matchJSON.map((item, index) => {

            const isActive = index === this.state.activeIndexMatch

            onChange = (activeIndexMatch) => {
                this.setState({
                    activeIndexMatch,
                })
            };

            return (
                <Match
                    onChange={(activeIndexMatch) => this.setState({ activeIndexMatch })}
                    //onChange={this.onChange}
                    key={index}
                    name={item.name}
                    score={item.score}
                    index={index}
                    isActive={isActive}
                />
            );
        });


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
                    //onChange={this.onChange}
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

