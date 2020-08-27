import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Profile } from './MatchButtonScreen';
import { Club } from './ClubButtonScreen';
import { Friends } from './FriendsButtonScreen';
import { Bell } from './NotificationsButtonScreen';
import { Messages } from './MessagesButtonScreen';

export class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <Profile navigation={this.props.navigation} />
                <Club navigation={this.props.navigation} />
                <Friends navigation={this.props.navigation} />
                <Bell navigation={this.props.navigation} />
                <Messages navigation={this.props.navigation} />
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