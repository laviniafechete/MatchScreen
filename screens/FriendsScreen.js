import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { Header2 } from '../components/header/Header2';
import { Body2 } from '../components/body/Body2';
import { Footer } from '../components/footer/Footer';
//import Reactotron from "reactotron-react-native";

export class FriendsScreen extends React.PureComponent {
    render() {
        //Reactotron.log('match.js')
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden />
                <Header2 navigation={this.props.navigation} />
                <Body2 />
                <Footer navigation={this.props.navigation} />
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
