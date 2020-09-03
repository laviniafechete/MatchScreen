import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class ForgotPasswordScreen extends React.Component {
    state = {
        emailStored: '',
        email: '',
        error: ''
    }

    getData = async () => {
        reactotron.log('intra in getData')
        let value
        try {
            value = await AsyncStorage.getItem('email')
            reactotron.log(value, 'value')
            this.setState({
                emailStored: value,
            })

        } catch (e) {
            return;
        }
    }

    setEmail = (value) => {
        this.setState({ 'email': value });
    }

    verifyEmail() {
        if (this.state.email != '') {
            reactotron.log(this.state.emailStored, 'emailStored');
            reactotron.log(this.state.email, 'email')
            if (this.state.emailStored === this.state.email) {
                this.props.navigation.navigate('Login')
            } else {
                return (
                    this.setState({
                        error: 'This email is not associated with any account'
                    })
                )
            }
        }
    }

    componentDidMount() {
        this.getData();
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
                        <Text style={{ color: '#fff', fontSize: 15, marginBottom: 10, textAlign: 'center' }}>If you have forgotten your password you can reset it here</Text>
                        <TextInput
                            onChangeText={this.setEmail}
                            placeholder="Email"
                            textContentType='emailAddress'
                            placeholderTextColor="#1a1e24"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.verifyEmail()} style={styles.button}>
                            <Text style={styles.buttonText}>Send my password</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'red' }}>{this.state.error}</Text>
                    </View>
                    <View style={styles.buttonLogin}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Do you have an account? </Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Login') }}
                        >
                            <Text style={styles.buttonTextLogin}>Login</Text>
                        </TouchableOpacity>
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
        paddingTop: 120,
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
        marginTop: 40
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
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 180
    },
    buttonTextLogin: {
        color: '#6495ED',
        fontSize: 16
    }
});