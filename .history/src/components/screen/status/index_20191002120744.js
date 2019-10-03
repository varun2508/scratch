import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
// import More from '../more/more';
import ScreenFooter from '../../shared/footer/index';
import { Header } from 'shared';

class StatusScreen extends React.Component {
	navigateTo = (screenName, props) => {
		const { componentId } = this.props;
		Navigation.push(componentId, {
			component: {
				name: screenName,
				passProps: { back: true },
			},
		});
	};

	static options() {
		return {
			topBar: {
				background: { color: '#FE5B3B' },
				noBorder: true,
				title: {
					text: 'Status',
				},
				drawBehind: false,
				visible: false,
				animate: false,
				height: 0,
			},
		};
	}
	render() {
		console.log('----------this.props', this.props);
		return (
			<View style={{ flex: 1 }}>
				<Header screenTitle='My Balance' />
				<Container>
					<Wrapper>
						<OptionContainer>
							<TextContainer>
								<Title>Available tockens</Title>
								<SubText>Tockens allow you to play games and win!</SubText>
							</TextContainer>
							<CardContaienr>
								<Card>
									<PointContainer>
										<Image
											style={{ marginRight: 4 }}
											source={require('icons/coin.png')}
										/>
										<Points>64</Points>
										<PointsText>Tockens</PointsText>
									</PointContainer>
								</Card>
								<ButtonContainer>
									<TouchableWithoutFeedback
										onPress={() => this.navigateTo('BuyTokens')}
									>
										<Button>Buy more</Button>
									</TouchableWithoutFeedback>
								</ButtonContainer>
							</CardContaienr>
						</OptionContainer>
						<OptionContainer>
							<TextContainer>
								<Title>Cash balance</Title>
								<SubText>
									You can withdraw your cash winnings. Or buy more play tockens
									for cash. !
								</SubText>
							</TextContainer>
							<CardContaienr>
								<Card>
									<PointContainer>
										<Image
											style={{ marginRight: 4 }}
											source={require('icons/64.png')}
										/>
										<Points>15</Points>
										<PointsText>Tockens</PointsText>
									</PointContainer>
								</Card>
								<ButtonContainer>
									<TouchableWithoutFeedback>
										<Button>Add funds</Button>
									</TouchableWithoutFeedback>
									<TouchableWithoutFeedback>
										<Button>Withdraw to bank</Button>
									</TouchableWithoutFeedback>
								</ButtonContainer>
							</CardContaienr>
						</OptionContainer>
					</Wrapper>
					<CardMD>
						<LinearGradient
							style={{ borderRadius: 5 }}
							colors={['#D8341D', '#FE5B3B']}
							start={{ x: 0.0, y: 0.25 }}
							end={{ x: 0.5, y: 1.0 }}
						>
							<StatusContainer>
								<StatusWrapper>
									<Image
										style={{ marginRight: 4 }}
										source={require('icons/Vector.png')}
									/>
									<View>
										<Text1>Your level</Text1>
										<H1>Gold play</H1>
									</View>
								</StatusWrapper>
								<Text2>
									These 2 lines here explain how the status works and what it
									helps to achieve.
								</Text2>
								<ButtonText>Upgrade now!</ButtonText>
							</StatusContainer>
						</LinearGradient>
					</CardMD>
				</Container>
				<ScreenFooter navigation={this.props.navigation} />
			</View>
		);
	}
}

const Text2 = styled.Text`
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	color: #fff;
	margin-top: 4px;
`;
const ButtonText = styled.Text`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	position: absolute;
	color: #ffffff;
	left: 16;
	bottom: 16;
`;
const CardMD = styled.View`
	margin-top: 16px;
`;
const NumberIc = styled.Text`
	font-size: 28px;
	line-height: 36px;
	color: #fe5b3b;
`;
const H1 = styled.Text`
	font-weight: bold;
	font-size: 28px;
	color: #ffffff;
`;
const Text1 = styled.Text`
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;
	color: #ffb790;
`;
const Container = styled.View`
	flex: 1;
	padding-left: 17;
	padding-right: 17;
`;
const StatusWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;
const Wrapper = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #c6c6c9;
	padding-bottom: 16px;
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
const Button = styled.Text`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #fe5b3b;
`;

const TextContainer = styled.View``;
const Points = styled.Text`
	font-weight: bold;
	font-size: 28px;
	line-height: 36px;
	color: #fe5b3b;
	margin-right: 16px;
`;
const PointsText = styled.Text`
	font-size: 13px;
	line-height: 16px;
	color: #828282;
`;
const CardContaienr = styled.View`
	flex-direction: row;
	align-items: center;
`;
const ButtonContainer = styled.View``;
const PointContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const Card = styled.View`
	width: 164px;
	height: 76px;
	border: 1px solid #e0e0e0;
	margin-top: 8;
	margin-right: 35px;
	/* box-sizing: border-box; */
	border-radius: 5px;
	padding-left: 16px;
	/* align-items: center; */
	justify-content: center;
	/* transform: rotate(-180deg); */
`;
const OptionContainer = styled.View`
	margin-top: 16px;
`;
const Option = styled.View``;
const StatusContainer = styled.View`
	height: 166px;
	border-radius: 5px;
	padding-left: 16;
	padding-right: 16;
	padding-top: 20;
	padding-bottom: 16px;
`;

var styles = StyleSheet.create({
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Gill Sans',
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
		backgroundColor: 'transparent',
	},
});

const NavBar = styled.View``;
export default StatusScreen;
