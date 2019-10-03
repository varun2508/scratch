import React from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableOpacity,
	KeyboardAvoidingView,
	Button,
} from 'react-native';
// import { Navigation } from 'react-native-navigation';
// import { observer } from 'mobx-react';
// import { goHome, goToMain } from '../../navigation';
import { login } from '../../../apis/auth';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		paddingRight: 38,
		paddingLeft: 38,
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
	input: {
		height: 40,
		borderBottomWidth: 1,
		borderBottomColor: '#4F4F4F',
		width: '100%',
		marginBottom: 12,
		fontSize: 16,
	},
});

// @observer
class LoginScreen extends React.Component {
	state = {
		email: '',
		password: '',
	};

	static options() {
		return {
			topBar: {
				backButton: { visible: false },
				drawBehind: false,
				visible: false,
				animate: false,
			},
		};
	}

	navigateTo = (screenName) => {
		const { navigation } = this.props;
		navigation(screenName);
	};

	handleSignIn = () => {
		console.log('----------trying to login');
		// this.props.navigation.navigate('StartPage');
		login({
			email: this.state.email,
			password: this.state.password,
		});
	};

	render() {
		console.log('-------login screen---');
		const { password, email } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.slideContainer}>
					<KeyboardAvoidingView
						keyboardVerticalOffset={20}
						behavior='padding'
						enabled
					>
						<View
							style={{
								justifyContent: 'center',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Image
								style={{ marginBottom: 24 }}
								source={require('../../../assets/image/logo.png')}
							/>
							<Text style={styles.H1}>Sign In!</Text>
							<TextInput
								style={styles.input}
								textAlign='center'
								onChangeText={(email) => this.setState({ email })}
								value={email}
								placeholder='Your email'
								placeholderTextColor='#828282'
								autoCapitalize='none'
							/>
							<TextInput
								textAlign='center'
								placeholderTextColor='#828282'
								style={styles.input}
								onChangeText={(pass) => this.setState({ password: pass })}
								placeholder='Password'
								secureTextEntry
								value={password}
							/>
						</View>
					</KeyboardAvoidingView>
					<TouchableOpacity onPress={this.handleSignIn}>
						<View
							style={{
								backgroundColor: '#FBDC42',
								borderRadius: 25,
								width: 200,
								height: 50,
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'center',
								marginTop: 12,
							}}
						>
							<Text
								style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}
							>
								Login
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.navigateTo('ForgotPasswordScreen')}
					>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								alignSelf: 'center',
								marginTop: 24,
							}}
						>
							<Text
								style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}
							>
								Forgot password?
							</Text>
						</View>
					</TouchableOpacity>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignSelf: 'center',
							position: 'absolute',
							bottom: 60,
						}}
					>
						<Text
							style={{ color: '#828282', fontWeight: 'bold', fontSize: 16 }}
						>
							New user?{'  '}
						</Text>
						<TouchableOpacity
							onPress={() => this.navigateTo('RegistrationScreen')}
						>
							<View style={{}}>
								<Text
									style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}
								>
									Register
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default LoginScreen;
