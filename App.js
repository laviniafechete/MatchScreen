import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar, ImageBackground, TextInput, Text } from 'react-native';
import Reactotron from "reactotron-react-native"


import Header from './components/header/Header';
import { Body } from './components/body/Body';
import Footer from './components/footer/Footer';

if (__DEV__) {
  import("./ReactotronConfig")
}

Reactotron.log("HELLO WORLD!!!")

export default class App extends Component {

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar hidden />
        <View>
          <Header />
        </View>
        <ImageBackground style={styles.body} source={require('./assets/bg.png')}>
          <Body />
        </ImageBackground>
        <View>
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1
  }
});
