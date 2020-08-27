import React from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, Alert, TouchableHighlight } from 'react-native';

// const closeIt = () =>
//     Alert.alert(
//         "Alert Title",
//         "It should close",
//         [
//             { text: "OK", onPress: () => console.log("OK Pressed") }
//         ],
//         { cancelable: false }
//     );

export const Top = ({ navigation }) => {
    return (
        <View style={styles.topContainer}>
            <ImageBackground style={styles.bg} source={require('../../assets/top-bg.png')}>
                <View style={styles.imagesContainer}>
                    <Image source={require('../../assets/friends.png')} style={styles.friends} />
                    <Text style={styles.txt}>FRIENDS</Text>
                    <View style={styles.touchContainer}>
                        <TouchableHighlight onPress={() => navigation.navigate('Match')} style={styles.touchable}>
                            <Image source={require('../../assets/x.png')} style={{ width: 40, height: 40 }} />
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        height: 50,
    },
    bg: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    imagesContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    friends: {
        aspectRatio: 84 / 76,
        width: 40
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 10,
    },
    touchContainer: {
        flex: 1,
    },
    touchable: {
        alignSelf: 'flex-end',
    }
})