import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StatusScreen from '../screen/status';

class IconWithBadge extends React.Component {
	render() {
		const { name, badgeCount, color, size } = this.props;
		return (
			<View style={{ width: 24, height: 24, margin: 5 }}>
				<Ionicons name={name} size={size} color={color} />
				{badgeCount > 0 && (
					<View
						style={{
							// If you're using react-native < 0.57 overflow outside of parent
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

export default createBottomTabNavigator(
	{
		StatusScreen: StatusScreen,
		LoginScr: SettingsScreen,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let IconComponent = Ionicons;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-information-circle${focused ? '' : '-outline'}`;
					// Sometimes we want to add badges to some icons.
					// You can check the implementation below.
					IconComponent = IconWithBadge;
				} else if (routeName === 'Settings') {
					iconName = `ios-options`;
				}

				// You can return any component that you like here!
				return <IconComponent name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	},
);
