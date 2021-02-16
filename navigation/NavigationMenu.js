import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MatchScreen } from '../screens/MatchScreen';
import { FriendsScreen } from '../screens/FriendsScreen';
import { ProfileScreen } from '../screens/ProfileScreen'
import { MessagesScreen } from '../screens/MessagesScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';

import { useSelector } from 'react-redux';


import reactotron from 'reactotron-react-native';


export const NavigationMenu = () => {

	const Stack = createStackNavigator();
	const isUserLogin = useSelector(state => state.login.login)

	reactotron.log(isUserLogin, 'isUserlogin')
	return (
		< NavigationContainer >
			<Stack.Navigator
				screenOptions={
					{
						headerShown: false
					}
				}
			>
				{!isUserLogin ? (
					<>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Password" component={ForgotPasswordScreen} />
						<Stack.Screen name="Register" component={RegisterScreen} />
					</>
				) : (
						<>
							<Stack.Screen name="Match" component={MatchScreen} />
							<Stack.Screen name="Profile" component={ProfileScreen} />
							<Stack.Screen name="Friends" component={FriendsScreen} />
							<Stack.Screen name="Messages" component={MessagesScreen} />
							<Stack.Screen name="Notifications" component={NotificationsScreen} />
						</>
					)}
			</Stack.Navigator>
		</NavigationContainer>
	)
};