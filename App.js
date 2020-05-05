import * as React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Messages from './screens/Messages';
import ProfilePage from './screens/ProfilePage';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import Settings from './screens/Settings';
import Balance from './screens/Balance';
import MyProjects from './screens/MyProjects';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

const images = [
	require('./assets/icons/all_projects.png'),
	require('./assets/icons/all_projects_active.png'),
	require('./assets/icons/favorites.png'),
	require('./assets/icons/favorites_active.png'),
	require('./assets/icons/messages.png'),
	require('./assets/icons/messages_active.png'),
	require('./assets/icons/my_projects.png'),
	require('./assets/icons/my_projects_active.png'),
	require('./assets/icons/profile.png'),
	require('./assets/icons/profile_active.png'),
];

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this.handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			);
		}
		return (
			<NavigationContainer style={{ backgroundColor: '#FFF' }}>
				<StatusBar barStyle="dark-content" />
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Messages">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;
										let style;

										if (route.name === 'Messages') {
											iconName = focused
												? require('./assets/icons/all_projects_active.png')
												: require('./assets/icons/all_projects.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Messages') {
											iconName = focused
												? require('./assets/icons/favorites_active.png')
												: require('./assets/icons/favorites.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Messages') {
											iconName = focused
												? require('./assets/icons/messages_active.png')
												: require('./assets/icons/messages.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'MyProjects') {
											iconName = focused
												? require('./assets/icons/my_projects_active.png')
												: require('./assets/icons/my_projects.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Profile') {
											iconName = focused
												? require('./assets/icons/profile_active.png')
												: require('./assets/icons/profile.png');
											style = { width: 25, height: 25 };
										}

										return <Image source={iconName} style={style} />;
									},
								})}
								tabBarOptions={{
									style: {
										backgroundColor: '#FFFFFF',
										position: 'absolute',
										bottom: -1,
										padding: 5,
										height: '9.5%',
										zIndex: 8,
										borderTopColor: '#BBC5D0',
										borderTopWidth: 1,
									},
									activeTintColor: '#5238F2',
									inactiveTintColor: '#BBC5D0',
								}}
							>
								<Tab.Screen name="Messages" component={Messages} />
								<Tab.Screen name="MyProjects" component={MyProjects} />
								<Tab.Screen name="Profile" component={Profile} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="ProfilePage" component={ProfilePage} />
					<Stack.Screen name="ProfileEdit" component={ProfileEdit} />
					<Stack.Screen name="Settings" component={Settings} />
					<Stack.Screen name="Balance" component={Balance} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
