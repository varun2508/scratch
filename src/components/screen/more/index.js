import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	AsyncStorage,
	TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation';
import { getCurrentUser, getUserById, updateUser } from '../../../apis/auth';
import { useAppContext } from '../../../providers/AppProvider';
import ScreenFooter from 'shared/footer/index';

import { Header } from 'components/shared';
// import { TouchableOpacity } from 'react-native-gesture-handler';

function MoreScreen(props) {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		birthDate: '',
	};

	const [state, setState] = useState(initialState);

	async function getUser() {
		const id = await AsyncStorage.getItem('scratchUserId');
		console.log('----------idddddddddd', id);
		const user = await getUserById(id);
		// setUser({ displayName: user.name });
		let newState = {
			userId: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			birthDate: user.birthDate,
		};
		setState(newState);
		console.log('----------user in component!!!', user);
	}

	useEffect(() => {
		getUser();
	}, []);
	// const { setUser } = useAppContext();
	console.log('---------- before call getUser');

	async function submitUpdate() {
		console.log('----------state шт ыгиьше', state);
		updateUser(state);
	}
	console.log('----------state', state);
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle='My profile' />
			<Container>
				<View>
					<Title>Account details</Title>
					<SubText>
						Tap any field below to edit (if necessary) your account information.
					</SubText>
				</View>
				<View style={{ marginTop: 16, marginBottom: 16 }}>
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
						placeholder='Your email address '
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
					<View style={{}}>
						<Text
							style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}
						>
							Change password
						</Text>
					</View>
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
						<Text
							style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}
						>
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
						<Text
							style={{ color: '#828282', fontSize: 16, fontWeight: 'bold' }}
						>
							Cancel
						</Text>
					</View>
				</View>
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
