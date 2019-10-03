import { createStackNavigator } from 'react-navigation-stack';

// import StartPage from '../screen/start-page';
import StatusScreen from '../screen/start-page';

const routeConfig = {
	StatusScreen: {
		screen: StatusScreen,
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
};

const navigatorConfig = {
	initialRouteName: 'StatusScreen',
	// mode: 'card',
	// headerMode: 'screen',
	headerMode: 'none',
};

const AppStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

// interface Props {
//   navigation?: any;
//   theme?: object;
// }

// class RootNavigator extends React.Component<Props> {
//   private static router = AppStackNavigator.router;

//   public render() {
//     return (
//       <AppStackNavigator
//         navigation={this.props.navigation}
//         screenProps={{ theme: this.props.theme }}
//       />
//     );
//   }
// }

export default AppStackNavigator;
