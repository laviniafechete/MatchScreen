import React from 'react';
import { ImageBackground, Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import * as Linking from 'expo-linking';

export const Banner = () => {
    return (
        <View style={styles.bannerContainer}>
            <ImageBackground style={styles.bg} source={require('../../assets/header-bg.png')}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>MORE FUN WITH FRIENDS!</Text>
                    <View style={styles.txtContainer}>
                        <Text style={styles.content}>Get<Text style={styles.greenContent}> +75 <Image style={{ width: 10, height: 15 }} source={require('../../assets/energy.png')} /> </Text>for every Facebook Friend that joins!</Text>
                        <Text style={styles.content}>Bonus recieved: <Text style={styles.greenContent}>2/30</Text></Text>
                    </View>
                </View>
                <View style={styles.socialMedia}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://web.whatsapp.com/')}>
                        <Image source={require('../../assets/whatsapp.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}>
                        <Image source={require('../../assets/messenger.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}>
                        <Image source={require('../../assets/facebook.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com/')}>
                        <Image source={require('../../assets/link.png')} style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        height: 200,
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    contentContainer: {
        padding: 15
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textAlign: 'center'
    },
    txtContainer: {
        alignItems: 'center',
        paddingTop: 20,
    },
    content: {
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontSize: 16,
    },
    greenContent: {
        color: '#1adc14',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontSize: 16
    },
    socialMedia: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    socialIcon: {
        width: 35,
        height: 35,
    }
})