import React, { useCallback } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { Footer } from '../components/footer/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLogin } from '../store/actions/loginActions'
import reactotron from 'reactotron-react-native';

const LogoutButtonRedux = () => {
    const isUserLogin = useSelector(state => state.login.login);
    reactotron.log(isUserLogin, 'isUserLogin 2')
    const dispatch = useDispatch();
    const toggleLoginHandler = useCallback(() => {
        dispatch(toggleLogin(isUserLogin))
    }, [dispatch, isUserLogin])
    return (
        <TouchableOpacity
            onPress={toggleLoginHandler}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
    )
}

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
                        <LogoutButtonRedux />
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