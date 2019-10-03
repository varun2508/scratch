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
	CheckBox,
} from 'react-native';
// import { Auth } from '../../@mobx';

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

class RegistrationScreen extends React.Component {
	state = {
		email: '',
		password: '',
		password_confirmation: '',
		acceptTerms: false,
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
	navigateTo = (screenName, props) => {
		const { navigation } = this.props;
		navigation(screenName);
	};

	handleRegistration = () => {
		const { email, password } = this.state;
		Auth.registration({ email, password });
	};
	render() {
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
								source={require('image/logo.png')}
							/>
							<Text style={styles.H1}>Create account</Text>
							<TextInput
								style={styles.input}
								textAlign='center'
								onChangeText={(email) => this.setState({ email })}
								value={this.state.email}
								placeholder='Your email'
								autoCapitalize='none'
								placeholderTextColor='#828282'
							/>
							<TextInput
								textAlign='center'
								placeholderTextColor='#828282'
								style={styles.input}
								onChangeText={(password) => this.setState({ password })}
								placeholder='Password'
								secureTextEntry
								textContentType='password'
								value={this.state.password}
							/>
							<TextInput
								textAlign='center'
								placeholderTextColor='#828282'
								style={styles.input}
								onChangeText={(password_confirmation) =>
									this.setState({ password_confirmation })
								}
								placeholder='Repeat password'
								secureTextEntry
								value={this.state.confirmPassword}
							/>
						</View>
					</KeyboardAvoidingView>
					<View style={{ display: 'flex', flexDirection: 'row' }}>
						<Text style={{}}>I accept the</Text>
						<Text style={{ color: '#4F4F4F', textDecorationLine: 'underline' }}>
							Terms and Conditions & Privacy Policy.
						</Text>
					</View>
					<TouchableOpacity onPress={this.handleRegistration}>
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
								Sign up
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
							Have an account? {'  '}
						</Text>
						<TouchableOpacity onPress={() => this.navigateTo('LoginScreen')}>
							<View style={{}}>
								<Text
									style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}
								>
									Log in
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default RegistrationScreen;
