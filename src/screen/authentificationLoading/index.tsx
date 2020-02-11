import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
interface AuthLoadingScreenProps {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class AuthLoadingScreen extends React.Component<AuthLoadingScreenProps, {}> {
	componentDidMount(): void {
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async (): Promise<void> => {
		const userToken = await AsyncStorage.getItem("scratchToken");
		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(userToken ? "App" : "Auth");
	};

	// Render any loading content that you like here
	render(): any {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}
export default AuthLoadingScreen;
