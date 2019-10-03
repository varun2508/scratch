import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

class IconWithBadge extends React.Component {
	render() {
		const { name, badgeCount, color, size } = this.props;
		return (
			<View style={{ width: 24, height: 24, margin: 5 }}>
				<Ionicons name={name} size={size} color={color} />
				{badgeCount > 0 && (
					<View
						style={{
							// /If you're using react-native < 0.57 overflow outside of the parent
							// will not work on Android, see https://git.io/fhLJ8
							position: 'absolute',
							right: -6,
							top: -3,
							backgroundColor: 'red',
							borderRadius: 6,
							width: 12,
							height: 12,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
							{badgeCount}
						</Text>
					</View>
				)}
			</View>
		);
	}
}

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
