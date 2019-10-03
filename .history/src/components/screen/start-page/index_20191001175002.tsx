import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation';
import Swiper from 'react-native-web-swiper';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	slideContainer: {
		flex: 1,
		display: 'flex',
		// alignItems: "center",
		justifyContent: 'center',
	},
	slide1: {
		backgroundColor: '#FFF',
	},
	slide2: {
		backgroundColor: '#FFF',
	},
	slide3: {
		backgroundColor: '#FFF',
	},
	textColor: {
		color: '#4F4F4F',
		fontSize: 14,
	},
	H1: {
		fontWeight: 'bold',
		fontSize: 28,
		color: '#4F4F4F',
		marginBottom: 11,
	},
});

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
	componentId: string;
}

interface State {
	enthusiasmLevel: number;
}

class StartPage extends Component<Props, State> {
	navigateTo = (screenName, props) => {
		const { componentId } = this.props;
		console.log('-----componentId-----', componentId);
		// Navigation.push(componentId, {
		//   component: {
		//     name: screenName,
		//   },
		// });
	};

	// static options() {
	// 	return {
	// 		topBar: {
	// 			title: {
	// 				text: '',
	// 			},
	// 			background: { color: '#19a39e' },
	// 			noBorder: true,
	// 			drawBehind: false,
	// 			visible: false,
	// 			animate: false,
	// 		},
	// 	};
	// }

	render() {
		return (
			<View style={styles.container}>
				<Swiper
					prevButtonStyle={{ display: 'none' }}
					nextButtonStyle={{ display: 'none' }}
					dotElement={
						<View
							style={{
								width: 24,
								marginBottom: 50,
								height: 4,
								margin: 4,
								backgroundColor: '#E0E0E0',
								borderRadius: 4,
							}}
						/>
					}
					activeDotElement={
						<View
							style={{
								width: 24,
								height: 4,
								marginBottom: 50,
								margin: 4,
								backgroundColor: '#FE5B3B',
								borderRadius: 4,
							}}
						/>
					}
				>
					<View style={styles.slideContainer}>
						<View
							style={{
								justifyContent: 'center',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Image
								style={{ marginBottom: 24 }}
								source={require('assets/image/logo.png')}
							/>
							<Text style={styles.H1}>Scratch and Win!</Text>
							<Text style={styles.textColor}>The product’s unique trading</Text>
							<Text style={styles.textColor}>proposition goes here</Text>
						</View>

						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate('LoginScreen')}
						>
							<View
								style={{
									alignSelf: 'center',
									position: 'absolute',
									bottom: 120,
								}}
							>
								<Text
									style={{ fontWeight: '500', color: '#828282', fontSize: 16 }}
								>
									Skip intro
								</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.slideContainer}>
						<View
							style={{
								justifyContent: 'center',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Image
								style={{ marginBottom: 24 }}
								source={require('image/logo.png')}
							/>
							<Text style={styles.H1}>Scratch and Win!</Text>
							<Text style={styles.textColor}>The product’s unique trading</Text>
							<Text style={styles.textColor}>proposition goes here</Text>
						</View>

						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate('LoginScreen')}
						>
							<View
								style={{
									alignSelf: 'center',
									position: 'absolute',
									bottom: 120,
								}}
							>
								<Text
									style={{ fontWeight: '500', color: '#828282', fontSize: 16 }}
								>
									Skip intro
								</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.slideContainer}>
						<View
							style={{
								justifyContent: 'center',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Image
								style={{ marginBottom: 24 }}
								source={require('image/logo.png')}
							/>
							<Text style={styles.H1}>Scratch and Win!</Text>
							<Text style={styles.textColor}>The product’s unique trading</Text>
							<Text style={styles.textColor}>proposition goes here</Text>
						</View>

						<TouchableWithoutFeedback
							onPress={() => this.props.navigation.navigate('LoginScreen')}
						>
							<View
								style={{
									alignSelf: 'center',
									position: 'absolute',
									bottom: 120,
								}}
							>
								<Text
									style={{ fontWeight: '500', color: '#828282', fontSize: 16 }}
								>
									Skip intro
								</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</Swiper>
			</View>
		);
	}
}
export default StartPage;
