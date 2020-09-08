import React, { useCallback } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import reactotron from 'reactotron-react-native';
import { LoginContextConsumer } from '../LoginContext';

import { useSelector, useDispatch } from 'react-redux';
import { toggleLogin } from '../store/actions/loginActions'



const LoginButtonRedux = () => {
    const isUserLogin = useSelector(state => state.login.login);
    reactotron.log(isUserLogin, 'isUserLogin1')
    const dispatch = useDispatch();
    const toggleLoginHandler = useCallback(() => {
        dispatch(toggleLogin(isUserLogin))
    }, [dispatch, isUserLogin])
    return (
        <TouchableOpacity
            onPress={toggleLoginHandler}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    )
}

export class LoginScreen extends React.Component {
    state = {
        emailStored: '',
        passwordStored: '',
        email: '',
        password: '',
        error: ''
    }

    getMultipleData = async () => {
        let values
        try {
            values = await AsyncStorage.multiGet(['email', 'password'])
            this.setState({
                emailStored: values[0][1],
                passwordStored: values[1][1]
            })

        } catch (e) {
            return;
        }
    }

    setEmail = (value) => {
        this.setState({ 'email': value });
    }

    setPassword = (value) => {
        this.setState({ 'password': value });
    }

    loginButton() {
        if (this.state.emailStored != this.state.email || this.state.passwordStored != this.state.password) {
            return (
                this.setState({
                    error: 'Email or password is incorrect!'
                })
            )
        }
    }

    componentDidMount() {
        this.getMultipleData();
        this.updateData = this.props.navigation.addListener('focus', () => {
            this.getMultipleData();
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.screen} >
                <StatusBar hidden />
                <ImageBackground style={styles.body} source={require('../assets/bg.png')}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logo_FR.png')} style={styles.logo} />
                        <Text>{this.state.emailStored}</Text>
                        <Text>{this.state.passwordStored}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email"
                            textContentType='emailAddress'
                            placeholderTextColor="#1a1e24"
                            style={styles.input}
                            onChangeText={this.setEmail}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#1a1e24"
                            style={styles.input}
                            onChangeText={this.setPassword}
                        />
                        <TouchableHighlight
                            onPress={() => { this.props.navigation.navigate('Password') }}
                        >
                            <Text style={{ color: '#6495ED' }}>Forgot password</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.buttonContainer}>
                        {this.state.emailStored === this.state.email && this.state.passwordStored === this.state.password ? (
                            <LoginButtonRedux />
                        ) : (
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.loginButton()}
                                        style={styles.button}
                                    >
                                        <Text style={styles.buttonText}>Login</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'red' }}>{this.state.error}</Text>
                                </View>
                            )}

                        <View style={styles.buttonRegister}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>Don't have an account? </Text>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Register') }}
                            >
                                <Text style={styles.buttonTextRegister}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
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
    inputContainer: {
        alignItems: 'center',
    },
    input: {
        width: '85%',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#6495ED',
        backgroundColor: '#fff',
        marginBottom: 10,
        fontSize: 16
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 40,
        position: 'relative',
        flex: 1
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
    },
    buttonRegister: {
        flexDirection: 'row',
        paddingBottom: 40,
        bottom: 0,
        position: 'absolute'
    },
    buttonTextRegister: {
        color: '#6495ED',
        fontSize: 16
    }
});