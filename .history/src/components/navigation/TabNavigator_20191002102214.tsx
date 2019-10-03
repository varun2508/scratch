import { createBottomTabNavigator } from 'react-navigation';

// import StartPage from '../screen/start-page';
import StatusScreen from '../screen/status';

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

const TabNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);

// interface Props {
//   navigation?: any;
//   theme?: object;
// }

// class RootNavigator extends React.Component<Props> {
//   private static router = TabNavigator.router;

//   public render() {
//     return (
//       <TabNavigator
//         navigation={this.props.navigation}
//         screenProps={{ theme: this.props.theme }}
//       />
//     );
//   }
// }

export default TabNavigator;
