import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert, FlatList, TouchableWithoutFeedback } from 'react-native';

import TopMatch from './TopMatch';
import Players from './Players';
import Match from './Match';

import matchJSON from './matchJSON'

const MatchItem = () => matchJSON.map((data, index) => {
    return (
        <Match
            key={index}
            name={data.name}
            score={data.score}
        />
    );
})

export class Body extends Component {
    state = {
        isLoading: true,
        message: '',
        indexFlatList: 0,
        showButton: false,
        newBg: false,
    }

    // callbackFunction = (childData) => {
    //     console.log('aici');
    //     this.setState({ message: childData });
    // }

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

    toggleButton = () => {
        console.log('toggleButton')
        this.setState({
            showButton: true,
            newBg: true,
        })
    };

    onChange = (index) => {
        this.setState({
            indexFlatList: index
        })
        this.toggleButton();
        // console.log('this.state.indexFlatList', this.state.indexFlatList)
        // console.log(this.state.newBg, 'this.state.newBg')
        // console.log(this.state.showButton, 'this.state.showButton')
    }

    render() {
        console.log('render body')
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
                    renderItem={({ item, index }) => {
                        return (
                            <Match
                                onChange={this.onChange}
                                key={index}
                                name={item.name}
                                score={item.score}
                                index={index}
                                indexFlatList={this.state.indexFlatList}
                                showButton={this.state.showButton}
                                newBg={this.state.newBg}
                            />
                        )
                    }}
                />
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

