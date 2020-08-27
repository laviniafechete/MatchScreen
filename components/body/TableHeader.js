import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

export const TableHeader = () => {
    return (
        <View style={styles.headerTableContainer}>
            <ImageBackground style={styles.bg} source={require('../../assets/table-header-bg.png')}>
                <View style={styles.tableCells}>
                    <Text style={[styles.text, styles.first]}>Pos.</Text>
                    <Text style={[styles.text, styles.second]}>Player</Text>
                    <Text style={[styles.text, styles.third]}>Level</Text>
                    <Text style={[styles.text, styles.fourth]}>Team</Text>
                    <Text style={[styles.text, styles.fifth]}>Goals</Text>
                </View>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    headerTableContainer: {
        width: '100%',
    },
    bg: {
        resizeMode: 'cover',
    },
    tableCells: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'center'
    },
    text: {
        color: '#838b93',
        fontSize: 12,
    },
    first: {
        width: Dimensions.get('window').width / 7
    },
    second: {
        width: Dimensions.get('window').width / 3
    },
    third: {
        width: Dimensions.get('window').width / 7,
        textAlign: 'center'
    },
    fourth: {
        width: Dimensions.get('window').width / 7,
        textAlign: 'center'
    },
    fifth: {
        width: Dimensions.get('window').width / 7,
        textAlign: 'center'
    }
});