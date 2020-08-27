import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Text } from 'react-native';

import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

export class ClubScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar hidden />
                <View>
                    <Header />
                </View>
                <View style={styles.body}>
                    <Text>Club Screen here!</Text>
                </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});