import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native';

import { Header } from '../components/header/Header';
import { Body } from '../components/body/Body';
import { Footer } from '../components/footer/Footer';

export class MatchScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar hidden />
                <View>
                    <Header />
                </View>
                <ImageBackground style={styles.body} source={require('../assets/bg.png')}>
                    <Body />
                </ImageBackground>
                <View>
                    <Footer navigation={this.props.navigation} />
                </View>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    body: {
        flex: 1
    }
});