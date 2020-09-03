import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import { TopMatch } from './TopMatch';
import { Players } from './Players';
import { Match } from './Match';

import matchJSON from './matchJSON'
//import reactotron from 'reactotron-react-native';

export class Body extends React.Component {
    state = {
        isLoading: true,
        message: '',
        activeIndexMatch: 0
    };

    componentDidMount() {
        this.loaderTime = setTimeout(
            () => this.loader(),
            1500
        );
    };

    componentWillUnmount() {
        clearInterval(this.loaderTime)
    };

    loader = () => {
        this.setState({
            isLoading: false
        })
    };

    onChange = (activeIndexMatch) => {
        this.setState({
            activeIndexMatch,
        })
    };

    renderItem = ({ item, index }) => {
        const isActive = index === this.state.activeIndexMatch
        return (
            <Match
                onChange={this.onChange}
                name={item.name}
                score={item.score}
                index={index}
                isActive={isActive}
            />
        )
    };

    keyExtractor = (item, index) => {
        return this.state.activeIndexMatch + index.toString()
    };

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
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={matchJSON}
                    renderItem={this.renderItem}
                />
            </View>
        )
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
    }
});

