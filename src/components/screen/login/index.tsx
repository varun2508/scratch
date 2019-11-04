import React from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	ActivityIndicator,
} from 'react-native';
// import { TextInputProps } from "@types/react-native"
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation';
import { login } from '../../../apis/auth';
import NavigationService from '../../navigation/NavigationService';

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
		textAlign: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
});
interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

function LoginScreen({ navigation }: Props): React.ReactElement {
	const [email, setEmail] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [loading, setIsLoading] = React.useState<boolean>(false);

	const navigateTo = (screenName: string): void => {
		navigation.navigate(screenName);
	};

	const handleSignIn = async (): Promise<void> => {
		setIsLoading(true);
		const resp: any = await login({
			email,
			password,
		});
		setIsLoading(false);
		if (!(resp instanceof Error)) {
			NavigationService.navigate('StatusScreen', {});
		}
	};

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
						<Text style={styles.H1}>Sign In</Text>
						<TextInput
							style={styles.input}
							onChangeText={(email: string): void => setEmail(email)}
							value={email}
							placeholder='Your email'
							placeholderTextColor='#828282'
							autoCapitalize='none'
						/>
						<TextInput
							placeholderTextColor='#828282'
							style={styles.input}
							onChangeText={(pass: string): void => setPassword(pass)}
							placeholder='Password'
							secureTextEntry
							value={password}
						/>
					</View>
				</KeyboardAvoidingView>
				{loading ? (
					<ActivityIndicator size='large' color='#fe5b3b' />
				) : (
					<TouchableOpacity onPress={handleSignIn}>
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
				)}

				<TouchableOpacity
					onPress={(): void => navigateTo('ForgotPasswordScreen')}
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
					<Text style={{ color: '#828282', fontWeight: 'bold', fontSize: 16 }}>
						New user?{'  '}
					</Text>
					<TouchableOpacity
						onPress={(): void => navigateTo('RegistrationScreen')}
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

export default LoginScreen;
