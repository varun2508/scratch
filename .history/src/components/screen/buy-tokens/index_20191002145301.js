import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styled from 'styled-components';

import { Header } from 'shared';

// import console = require('console');

const amountArray = ['100', '200', '500', '1000'];

class BuyTokens extends React.Component {
	state = { text: '' };

	static options() {
		return {
			topBar: {
				background: { color: '#FE5B3B' },
				noBorder: true,
				drawBehind: false,
				visible: false,
				animate: false,
				height: 0,
			},
		};
	}
	render() {
		const { componentId, back } = this.props;
		console.log(this.props);
		return (
			<View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
				<Header
					screenTitle='Buy tockens'
					componentId={componentId}
					back={back}
				/>
				<Container style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
					<AmountContainer>
						<Title>Choose amount</Title>
						<SubText>
							Select how many tockens you need or enter a custom amount below.
						</SubText>
					</AmountContainer>
					<CadsContainer>
						{amountArray.map((amount) => (
							<Card key={amount} isSelected={amount === '200'}>
								<Image
									style={{ marginRight: 4 }}
									source={require('icons/coin.png')}
								/>
								<Amount isSelected={amount === '200'}>{amount}</Amount>
							</Card>
						))}
					</CadsContainer>
					<View style={{ marginTop: 16 }}>
						<Title>Enter custom amount:</Title>
						<TextInput
							placeholder='e.g., 85'
							style={{
								height: 40,
								borderBottomColor: 'gray',
								borderBottomWidth: 1,
								textAlign: 'center',
								marginBottom: 10,
							}}
							onChangeText={(text) => this.setState({ text })}
							value={this.state.text}
						/>
					</View>
					<View style={{ marginTop: 16 }}>
						<Title>Review & pay</Title>
						<SubText>
							Select how many tockens you need or enter a custom amount below.
						</SubText>
						<WhiteCard>
							<CardOption>
								<Key>Order quantity:</Key>
								<Value>200 tockens</Value>
							</CardOption>
							<CardOption>
								<Key>To pay:</Key>
								<Value>₦205</Value>
							</CardOption>
						</WhiteCard>
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
							marginTop: 12,
						}}
					>
						<Text
							style={{ color: '#333333', fontSize: 16, fontWeight: 'bold' }}
						>
							Play now
						</Text>
					</View>
				</Container>
			</View>
		);
	}
}

const CardOption = styled.View`
	flex-direction: row;
	margin-bottom: 4px;
`;
const WhiteCard = styled.View`
	height: 68px;
	background: #ffffff;
	border: 1px solid #f2f2f2;
	padding: 16px;
	margin-top: 16px;
`;

const Key = styled.Text`
	font-size: 16px;
	color: #4f4f4f;
	margin-right: 4px;
`;
const Value = styled.Text`
	font-size: 16px;
	color: #333333;
	font-weight: 500;
`;

const Container = styled.View`
	display: flex;
	flex: 1;
	padding: 17px;
`;

const Amount = styled.Text`
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	color: ${({ isSelected }) => (!isSelected ? '#FE5B3B' : '#FFFFFF')};
`;
const CadsContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 16px;
	/* justify-content: center; */
`;
const AmountContainer = styled.View`
	/* flex-direction: row; */
`;
const Option = styled.View``;

const SubText = styled.Text`
	font-weight: normal;
	font-size: 14px;
	color: #4f4f4f;
`;
const Title = styled.Text`
	font-weight: bold;
	font-size: 20px;
	margin-bottom: 16px;
	line-height: 24px;
	color: #333333;
`;

const Card = styled.View`
	width: 79px;
	height: 60px;
	background: ${({ isSelected }) => (isSelected ? '#FE5B3B' : '#FFFFFF')};
	border: 1px solid #e0e0e0;
	border-radius: 5px;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	margin-right: 9px;
`;

export default BuyTokens;
