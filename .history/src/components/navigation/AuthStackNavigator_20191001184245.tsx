import React from 'react';
import Temp from '../screen/Temp';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screen/login';
import StartPageScreen from '../screen/start-page';
const routeConfig = {
	LoginScreen: {
		screen: LoginScreen,
		// navigationOptions: ({ navigation, screenProps }): object => {
		// 	const { theme } = screenProps;
		// 	return {
		// 		title: navigation.state.routeName,
		// 		headerStyle: {
		// 			backgroundColor: theme.background,
		// 		},
		// 		headerTitleStyle: { color: theme.fontColor },
		// 		headerTintColor: theme.tintColor,
		// 	};
		// },
		// path: 'intro',
	},
	StartPage: {
		screen: StartPage,
		// navigationOptions: ({ navigation, screenProps }): object => {
		// 	const { theme } = screenProps;
		// 	return {
		// 		headerTitle: (
		// 			<Text
		// 				style={{
		// 					fontSize: 18,
		// 					color: theme.fontColor,
		// 				}}
		// 			>
		// 				{navigation.state.routeName}
		// 			</Text>
		// 		),
		// 		headerStyle: {
		// 			backgroundColor: theme.background,
		// 		},
		// 		headerTitleStyle: { color: theme.fontColor },
		// 		headerTintColor: theme.tintColor,
		// 	};
		// },
		// path: 'temp',
	},
};

const navigatorConfig = {
	initialRouteName: 'StartPage',
	// mode: 'card',
	// headerMode: 'screen',
	headerMode: 'none',
};

const AuthStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

// interface Props {
//   navigation?: any;
//   theme?: object;
// }

// class RootNavigator extends React.Component<Props> {
//   private static router = AuthStackNavigator.router;

//   public render() {
//     return (
//       <AuthStackNavigator
//         navigation={this.props.navigation}
//         screenProps={{ theme: this.props.theme }}
//       />
//     );
//   }
// }

export default AuthStackNavigator;
