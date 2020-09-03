import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { Footer } from '../components/footer/Footer'
import { LoginContextConsumer } from '../LoginContext';

export class ProfileScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.screen} >
                <StatusBar hidden />
                <ImageBackground style={styles.body} source={require('../assets/bg.png')}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logo_FR.png')} style={styles.logo} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <LoginContextConsumer>
                            {context => (
                                <TouchableOpacity
                                    onPress={context.userIsLoggedInToggle}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Log out</Text>
                                </TouchableOpacity>
                            )}
                        </LoginContextConsumer>
                    </View>
                </ImageBackground>
                <Footer navigation={this.props.navigation} />
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
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 80,
    },
    logo: {
        height: 80,
        aspectRatio: 445 / 177,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 150
    },
    button: {
        backgroundColor: '#6495ED',
        width: 200,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18
    }
});