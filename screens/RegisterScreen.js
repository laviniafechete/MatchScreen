import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Text, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class RegisterScreen extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: ''
    };

    componentDidMount() {
        AsyncStorage.multiGet(['email', 'password']).then(response => {
            console.log(response[0][0])
            console.log(response[0][1])
            console.log(response[1][0])
            console.log(response[1][1])
        })
    };

    setName = (value) => {
        this.setState({ 'name': value });
    }

    setEmail = (value) => {
        this.setState({ 'email': value });
    }

    setPassword = (value) => {
        this.setState({ 'password': value });
    }

    verifyEmptyInput = () => {
        if (this.state.email != '' && this.state.password != '') {
            AsyncStorage.multiSet([
                ['name', this.state.name],
                ['email', this.state.email],
                ['password', this.state.password]
            ]);
        }

        if (this.state.email != '' || this.state.password != '') {
            this.props.navigation.navigate('Login')
        } else {
            this.setState({
                error: 'Required information*'
            })
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar hidden />
                <ImageBackground style={styles.body} source={require('../assets/bg.png')}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logo_FR.png')} style={styles.logo} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={this.setName}
                            placeholder="Name"
                            textContentType="name"
                            placeholderTextColor="#1a1e24"
                            style={styles.input}
                        />
                        <TextInput
                            onChangeText={this.setEmail}
                            placeholder="Email*"
                            textContentType='emailAddress'
                            placeholderTextColor="#1a1e24"
                            style={styles.input}
                        />
                        <Text style={[{ color: 'red' }, (this.state.error === '') ? { display: 'none' } : { marginTop: -10 }]}>{this.state.error}</Text>
                        <TextInput
                            onChangeText={this.setPassword}
                            placeholder="Password*"
                            textContentType='password'
                            secureTextEntry={true}
                            placeholderTextColor="#1a1e24"
                            style={styles.input}
                        />
                        <Text style={[{ color: 'red' }, (this.state.error === '') ? { display: 'none' } : { marginTop: -10 }]}>{this.state.error}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.verifyEmptyInput()}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                        <View style={styles.buttonLogin}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>Do you have an account? </Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={styles.buttonTextLogin}>Login</Text>
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
        borderColor: '#6495ED',
        backgroundColor: '#fff',
        marginBottom: 10,
        fontSize: 16,
        borderRadius: 5
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
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonLogin: {
        flexDirection: 'row',
        paddingBottom: 40,
        bottom: 0,
        position: 'absolute'
    },
    buttonTextLogin: {
        color: '#6495ED',
        fontSize: 16
    }
});