import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styled from 'styled-components';
import { getCurrentUser } from '../../../apis/auth';
import ScreenFooter from 'shared/footer/index';

import { Header } from 'shared';

class MoreScreen extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		emil: '',
		date: '',
	};
	UNSAFE_componentWillMount() {
		getCurentUser();
	}
	getCurentUser = async () => {
		console.log('---------- before call getUser');
		const user = await getCurrentUser();
		console.log('----------user in component!!!', user);
	};
	static options() {
		return {
			topBar: {
				background: { color: '#FE5B3B' },
				noBorder: true,
				title: {
					text: 'More',
				},
				drawBehind: false,
				visible: false,
				animate: false,
			},
		};
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header screenTitle='My profile' />
				<Container>
					<View>
						<Title>Account details</Title>
						<SubText>
							Tap any field below to edit (if necessary) your account
							information.
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
							onChangeText={(firstName) => this.setState({ firstName })}
							value={this.state.text}
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
							onChangeText={(lastName) => this.setState({ lastName })}
							value={this.state.text}
						/>
						<TextInput
							placeholder='Your eamil address '
							style={{
								height: 40,
								borderBottomColor: 'gray',
								borderBottomWidth: 1,
								textAlign: 'center',
								marginBottom: 10,
							}}
							onChangeText={(email) => this.setState({ email })}
							value={this.state.text}
						/>
						<TextInput
							placeholder='Date'
							style={{
								height: 40,
								borderBottomColor: 'gray',
								borderBottomWidth: 1,
								textAlign: 'center',
								marginBottom: 10,
							}}
							onChangeText={(date) => this.setState({ date })}
							value={this.state.text}
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
						<View
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
						</View>
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
				<ScreenFooter navigation={this.props.navigation} />
			</View>
		);
	}
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
