import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MatchScreen } from '../screens/MatchScreen';
import { FriendsScreen } from '../screens/FriendsScreen';
import { ClubScreen } from '../screens/ClubScreen';
import { MessagesScreen } from '../screens/MessagesScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';


const Stack = createStackNavigator();

export class NavigationMenu extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={
                        {
                            headerShown: false
                        }
                    }
                >
                    <Stack.Screen name="Match" component={MatchScreen} />
                    <Stack.Screen name="Friends" component={FriendsScreen} />
                    <Stack.Screen name="Club" component={ClubScreen} />
                    <Stack.Screen name="Messages" component={MessagesScreen} />
                    <Stack.Screen name="Notifications" component={NotificationsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}