import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Profile from './Profile';
import Club from './Club';
import Friends from './Friends';
import Bell from './Bell';
import Messages from './Messages';

class Footer extends Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <View>
                    <Profile />
                </View>
                <View>
                    <Club />
                </View>
                <View>
                    <Friends />
                </View>
                <View>
                    <Bell />
                </View>
                <View>
                    <Messages />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        backgroundColor: '#232528',
        paddingVertical: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
        borderWidth: 1,
        borderTopColor: '#fff'
    }
});

export default Footer;