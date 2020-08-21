import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, ScrollView, } from 'react-native';

import Reactotron from "reactotron-react-native"

import TopMatch from './TopMatch';
import Players from './Players';
import Match from './Match';

import matchJSON from './matchJSON'

// const MatchItem = () => matchJSON.map((item, index) => {

//     state = {
//         activeIndexMatch: 0
//     }

//     const isActive = () => {
//         index === this.state.activeIndexMatch
//     }

//     return (
//         <Match
//             name={item.name}
//             score={item.score}
//             index={index}
//             //isActive={isActive}
//             onChange=
//         />
//     );
// })

export class Body extends Component {
    state = {
        isLoading: true,
        message: '',
        activeIndexMatch: 0,
        //newBg: false,
    };



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

    onChange = (activeIndexMatch) => {
        this.setState({
            activeIndexMatch,
        })
    }

    renderItem = ({ item, index }) => {
        //Reactotron.log(this.state.activeIndexMatch)
        const isActive = index === this.state.activeIndexMatch
        //Reactotron.log(isActive, index);
        return (
            <Match
                onChange={this.onChange}
                name={item.name}
                score={item.score}
                index={index}
                isActive={isActive}
            />
        )
    }

    keyExtractor = (item, index) => {
        //Reactotron.log(index);
        return this.state.activeIndexMatch + index.toString()
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
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={matchJSON}
                    renderItem={this.renderItem}
                />
                {/* <ScrollView>
                    <MatchItem
                    //onChange={this.onChange()}
                    />
                </ScrollView> */}
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

