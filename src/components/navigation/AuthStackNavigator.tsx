import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screen/login';
import RegistrationScreen from '../screen/registration';
import ForgotPasswordScreen from '../screen/forgot-password';
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
	StartPageScreen: {
		screen: StartPageScreen,
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
	RegistrationScreen: {
		screen: RegistrationScreen,
	},
	ForgotPasswordScreen: {
		screen: ForgotPasswordScreen,
	},
};

const navigatorConfig = {
	initialRouteName: 'StartPageScreen',
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
