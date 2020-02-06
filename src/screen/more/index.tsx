import React, { useEffect, useState, FunctionComponent } from "react";
import {
	AsyncStorage,
	ActivityIndicator,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	TouchableWithoutFeedback,
	Image,
} from "react-native";

import styled from "styled-components/native";
// import {
//   NavigationParams,
//   NavigationScreenProp,
//   NavigationState,
// } from 'react-navigation';
// import * as Animatable from 'react-native-animatable';
import { getUserById, updateUser, updatePassword } from "../../apis/auth";
import { useAppContext } from "../../providers/AppProvider";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import AppButton from "../../components/shared/button";

const MoreScreen: FunctionComponent = (props) => {
	const initialState = {
		id: "",
		firstName: "",
		lastName: "",
		email: "",
		birthDate: "",
		oldPassword: "",
		newPassword: "",
		isLoading: false,
	};
	const { store, setUser } = useAppContext();
	const [state, setState] = useState(initialState);
	const [modalVisible, setModalVisible] = React.useState(false);
	const [oldPassword, setOldPassword] = React.useState("");
	const [newPassword, setNewPassword] = React.useState("");

	async function getUser() {
		const id = await AsyncStorage.getItem("scratchUserId");
		const user = await getUserById(id);
		setUser(user);

		setState({ ...user, userId: user.id });
	}

	useEffect(() => {
		getUser();
	}, []);

	async function submitUpdate() {
		updateUser(state);
	}

	async function updatePasswordHandler() {
		setState({ ...state, isLoading: true });
		const body = {
			oldPassword,
			newPassword,
		};
		await updatePassword(body);
		setState({ ...state, isLoading: false });
	}

	const renderInputs = (): React.SFC => (
		<View>
			<View style={{ marginTop: 16, marginBottom: 16 }}>
				<TextInput
					placeholder="Your email address "
					editable={false}
					style={{
						height: 40,
						borderBottomColor: "gray",
						borderBottomWidth: 1,
						textAlign: "center",
						marginBottom: 10,
					}}
					onChangeText={(email): void => setState({ ...state, email })}
					value={state.email}
				/>
				<TextInput
					placeholder="First Name"
					style={{
						height: 40,
						borderBottomColor: "gray",
						borderBottomWidth: 1,
						textAlign: "center",
						marginBottom: 10,
					}}
					onChangeText={(firstName): void => setState({ ...state, firstName })}
					value={state.firstName}
				/>
				<TextInput
					placeholder="Last Name"
					style={{
						height: 40,
						borderBottomColor: "gray",
						borderBottomWidth: 1,
						textAlign: "center",
						marginBottom: 10,
					}}
					onChangeText={(lastName): void => setState({ ...state, lastName })}
					value={state.lastName}
				/>

				<TextInput
					placeholder="Birth date"
					style={{
						height: 40,
						borderBottomColor: "gray",
						borderBottomWidth: 1,
						textAlign: "center",
						marginBottom: 10,
					}}
					onChangeText={(birthDate): void => setState({ ...state, birthDate })}
					value={state.birthDate}
				/>
			</View>
			<View style={{ alignItems: "center", justifyContent: "center" }}>
				<TouchableOpacity onPress={(): void => setModalVisible(true)}>
					<Text style={{ color: "#FE5B3B", fontSize: 16, fontWeight: "bold" }}>
						Change password
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={(): any => submitUpdate()}
					style={{
						backgroundColor: "#FBDC42",
						borderRadius: 25,
						width: 200,
						height: 50,
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						marginTop: 16,
					}}
				>
					<Text style={{ color: "#333333", fontSize: 16, fontWeight: "bold" }}>
						Save
					</Text>
				</TouchableOpacity>
				<View
					style={{
						width: 200,
						height: 50,
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						marginTop: 12,
					}}
				>
					<Text style={{ color: "#828282", fontSize: 16, fontWeight: "bold" }}>
						Cancel
					</Text>
				</View>
			</View>
		</View>
	);

	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="My profile" navigation={props.navigation} />
			<Container>
				<Modal animationType="slide" transparent visible={modalVisible}>
					<View
						style={{
							justifyContent: "flex-end",
							paddingTop: 20,
							height: "100%",
							flexDirection: "column",
							backgroundColor: "rgba(0, 0, 0, 0.3)",
						}}
					>
						<View
							style={{
								height: "85%",
								backgroundColor: "#fff",
								alignItems: "center",
							}}
						>
							<View
								style={{
									width: "100%",
									alignContent: "center",
									alignItems: "center",
									marginTop: 60,
								}}
							>
								<TextInput
									placeholder="Old password"
									style={{
										height: 40,
										borderBottomColor: "gray",
										borderBottomWidth: 1,
										textAlign: "center",
										marginBottom: 10,
										width: 200,
									}}
									onChangeText={(oldPassword): void =>
										setOldPassword(oldPassword)
									}
									value={state.oldPassword}
								/>
								<TextInput
									placeholder="New password"
									secureTextEntry
									style={{
										height: 40,
										borderBottomColor: "gray",
										borderBottomWidth: 1,
										textAlign: "center",
										marginBottom: 10,
										width: 200,
									}}
									onChangeText={(newPassword): void =>
										setNewPassword(newPassword)
									}
									value={state.newPassword}
								/>
							</View>
							{state.isLoading ? (
								<ActivityIndicator
									size="large"
									color="#fe5b3b"
									style={{ marginTop: 10 }}
								/>
							) : (
								<AppButton
									onClick={(): void => updatePasswordHandler()}
									text="Change password"
								/>
							)}
						</View>
						<View
							style={{
								width: "100%",
								alignItems: "flex-end",
								height: 100,
								position: "absolute",
								bottom: 40,
							}}
						>
							<TouchableWithoutFeedback
								onPress={(): void => setModalVisible(false)}
							>
								<Image
									style={{ marginRight: 36 }}
									source={require("icons/close.png")}
								/>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</Modal>
				<View>
					<Title>Account details</Title>
					<SubText>
						Tap any field below to edit (if necessary) your account information.
					</SubText>
				</View>
				{!state.email ? (
					<ActivityIndicator size="large" color="#fe5b3b" />
				) : (
					renderInputs()
				)}
			</Container>
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
};

const Container = styled.View`
	flex: 1;
	padding: 16px;
`;

const SubText = styled.Text`
	font-size: 14px;
	line-height: 20px;
	align-items: center;
	color: #4f4f4f;
`;

const Title = styled.Text`
	font-weight: bold;
	font-size: 20px;
	color: #4f4f4f;
`;

export default MoreScreen;
