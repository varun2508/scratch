import React, { useEffect, useState } from 'react';
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
} from 'react-native';

import styled from 'styled-components';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import {
	getCurrentUser,
	getUserById,
	updateUser,
	updatePassword,
} from '../../../apis/auth';
import { useAppContext } from '../../../providers/AppProvider';
import ScreenFooter from 'shared/footer/index';
import { Header } from 'components/shared';
import AppButton from 'shared/button';

function MoreScreen(props) {
	const initialState = {
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		birthDate: '',
		oldPassword: '',
		newPassword: '',
		isLoading: false,
	};
	const { store, setUser } = useAppContext();
	const [state, setState] = useState(initialState);
	const [modalVisible, setModalVisible] = React.useState(false);
	const [oldPassword, setOldPassword] = React.useState('');
	const [newPassword, setNewPassword] = React.useState('');

	async function getUser() {
		const id = await AsyncStorage.getItem('scratchUserId');
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

	const renderInputs = () => (
		<View>
			<View style={{ marginTop: 16, marginBottom: 16 }}>
				<TextInput
					placeholder='Your email address '
					editable={false}
					style={{
						height: 40,
						borderBottomColor: 'gray',
						borderBottomWidth: 1,
						textAlign: 'center',
						marginBottom: 10,
					}}
					onChangeText={(email) => setState({ ...state, email })}
					value={state.email}
				/>
				<TextInput
					placeholder='First Name'
					style={{
						height: 40,
						borderBottomColor: 'gray',
						borderBottomWidth: 1,
						textAlign: 'center',
						marginBottom: 10,
					}}
					onChangeText={(firstName) => setState({ ...state, firstName })}
					value={state.firstName}
				/>
				<TextInput
					placeholder='Last Name'
					style={{
						height: 40,
						borderBottomColor: 'gray',
						borderBottomWidth: 1,
						textAlign: 'center',
						marginBottom: 10,
					}}
					onChangeText={(lastName) => setState({ ...state, lastName })}
					value={state.lastName}
				/>

				<TextInput
					placeholder='Birth date'
					style={{
						height: 40,
						borderBottomColor: 'gray',
						borderBottomWidth: 1,
						textAlign: 'center',
						marginBottom: 10,
					}}
					onChangeText={(birthDate) => setState({ ...state, birthDate })}
					value={state.birthDate}
				/>
			</View>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<Text style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}>
						Change password
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => submitUpdate()}
					style={{
						backgroundColor: '#FBDC42',
						borderRadius: 25,
						width: 200,
						height: 50,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						marginTop: 16,
					}}
				>
					<Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}>
						Save
					</Text>
				</TouchableOpacity>
				<View
					style={{
						width: 200,
						height: 50,
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						marginTop: 12,
					}}
				>
					<Text style={{ color: '#828282', fontSize: 16, fontWeight: 'bold' }}>
						Cancel
					</Text>
				</View>
			</View>
		</View>
	);

	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle='My profile' />
			<Container>
				<Modal animationType='slide' transparent visible={modalVisible}>
					<View
						style={{
							justifyContent: 'flex-end',
							paddingTop: 20,
							height: '100%',
							flexDirection: 'column',
							backgroundColor: 'rgba(0, 0, 0, 0.3)',
						}}
					>
						<View
							style={{
								height: '85%',
								backgroundColor: '#fff',
								alignItems: 'center',
							}}
						>
							<View
								style={{
									width: '100%',
									alignContent: 'center',
									alignItems: 'center',
									marginTop: 60,
								}}
							>
								<TextInput
									placeholder='Old password'
									style={{
										height: 40,
										borderBottomColor: 'gray',
										borderBottomWidth: 1,
										textAlign: 'center',
										marginBottom: 10,
										width: 200,
									}}
									onChangeText={(oldPassword) => setOldPassword(oldPassword)}
									value={state.oldPassword}
								/>
								<TextInput
									placeholder='New password'
									secureTextEntry
									style={{
										height: 40,
										borderBottomColor: 'gray',
										borderBottomWidth: 1,
										textAlign: 'center',
										marginBottom: 10,
										width: 200,
									}}
									onChangeText={(newPassword) => setNewPassword(newPassword)}
									value={state.newPassword}
								/>
							</View>
							<Image
								source={{ uri: 'https://reactjs.org/logo-og.png' }}
								style={{
									width: 40,
									height: 40,
									borderWidth: 2,
									borderColor: 'red',
								}}
							/>
							{state.isLoading ? (
								<ActivityIndicator
									size='large'
									color='#fe5b3b'
									style={{ marginTop: 10 }}
								/>
							) : (
								<AppButton
									onClick={() => updatePasswordHandler()}
									text='Change password'
								/>
							)}
						</View>
						<View
							style={{
								width: '100%',
								alignItems: 'flex-end',
								height: 100,
								position: 'absolute',
								bottom: 40,
							}}
						>
							<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
								<Image
									style={{ marginRight: 36 }}
									source={require('icons/close.png')}
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
					<ActivityIndicator size='large' color='#fe5b3b' />
				) : (
					renderInputs()
				)}
			</Container>
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
}

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
