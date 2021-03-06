import React from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import { forgotPassword } from "../../apis/auth";
import { emailValidation } from "../../utils/validations";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		paddingRight: 38,
		paddingLeft: 38,
	},
	slideContainer: {
		flex: 1,
		display: "flex",
		// alignItems: "center",
		justifyContent: "center",
	},
	slide1: {
		backgroundColor: "#FFF",
	},
	slide2: {
		backgroundColor: "#FFF",
	},
	slide3: {
		backgroundColor: "#FFF",
	},
	textColor: {
		color: "#4F4F4F",
		fontSize: 14,
	},
	H1: {
		fontWeight: "bold",
		fontSize: 28,
		color: "#4F4F4F",
		marginBottom: 11,
	},
	input: {
		height: 40,
		borderBottomWidth: 1,
		borderBottomColor: "#4F4F4F",
		width: "100%",
		marginBottom: 12,
		marginTop: 12,
		fontSize: 16,
	},
});

class ForgotPasswordScreen extends React.Component {
	state = {
		userEmail: "",
	};

	navigateTo = (screenName) => {
		const { navigation } = this.props;
		navigation.navigate(screenName);
	};

	resetPassword = () => {
		const { userEmail } = this.state;

		if (emailValidation(userEmail)) {
			forgotPassword({ email: userEmail });
		} else {
			Alert.alert("Please enter a valid email");
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.slideContainer}>
					<KeyboardAvoidingView
						keyboardVerticalOffset={20}
						behavior="padding"
						enabled
					>
						<View
							style={{
								justifyContent: "center",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Image
								style={{ marginBottom: 24 }}
								source={require("image/logo.png")}
							/>
							<Text style={styles.H1}>Reset password!</Text>
							<Text style={styles.textColor}>
								Enter your email address and click the button --
							</Text>
							<Text style={styles.textColor}>
								an email will be sent to you with a link
							</Text>
							<Text style={styles.textColor}>to reset your password</Text>
							<TextInput
								style={styles.input}
								textAlign="center"
								onChangeText={(userEmail) => this.setState({ userEmail })}
								value={this.state.userEmail}
								placeholder="Enter Email"
								placeholderTextColor="#828282"
							/>
						</View>
					</KeyboardAvoidingView>
					<TouchableOpacity onPress={() => this.resetPassword()}>
						<View
							style={{
								backgroundColor: "#FBDC42",
								borderRadius: 25,
								width: 200,
								height: 50,
								justifyContent: "center",
								alignItems: "center",
								alignSelf: "center",
								marginTop: 12,
							}}
						>
							<Text
								style={{ color: "#333333", fontSize: 16, fontWeight: "bold" }}
							>
								Reset
							</Text>
						</View>
					</TouchableOpacity>
					<View
						style={{
							display: "flex",
							flexDirection: "row",
							alignSelf: "center",
							marginTop: 30,
						}}
					>
						<Text
							style={{ color: "#828282", fontWeight: "bold", fontSize: 16 }}
						>
							Have an account?{"  "}
						</Text>
						<TouchableOpacity onPress={() => this.navigateTo("LoginScreen")}>
							<View style={{}}>
								<Text
									style={{ color: "#FE5B3B", fontSize: 16, fontWeight: "bold" }}
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

export default ForgotPasswordScreen;
