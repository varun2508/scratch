import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Header, Add } from 'shared';
import ScreenFooter from 'shared/footer/index';
import styled from 'styled-components';
const list = [1, 2, 3, 4, 5, 6, 7, 8];

class PlayScreen extends React.Component {
	static options() {
		return {
			topBar: {
				background: { color: '#FE5B3B' },
				noBorder: true,
				title: {
					text: 'Play & Win',
				},
				drawBehind: false,
				visible: false,
				animate: false,
			},
		};
	}
	state = {
		scrollEnabled: false,
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header screenTitle='Game' />
				<ScrollView>
					<Container>
						<Wrapper>
							<Title>Featured</Title>

							<ScrollView
								showsHorizontalScrollIndicator={false}
								horizontal
								contentContainerStyle={{ paddingHorizontal: 20 }}
							>
								{list.map((item) => (
									<Carusel key={item}>
										<BigOnTopContainer>
											<BigImageContainer
												onPress={() =>
													this.props.navigation.navigate('GameScreen')
												}
											>
												<BigImage
													resizeMode={'contain'}
													source={require('image/image.png')}
												/>
											</BigImageContainer>
											<TwoSmallGameContainer>
												<SmallImageContainer
													onPress={() =>
														this.props.navigation.navigate('GameScreen')
													}
												>
													<SmallImage
														resizeMode={'stretch'}
														source={require('image/image-9.png')}
													/>
												</SmallImageContainer>
												<SmallImageContainer
													onPress={() =>
														this.props.navigation.navigate('GameScreen')
													}
												>
													<SmallImage
														resizeMode={'stretch'}
														source={require('image/image-8.png')}
													/>
												</SmallImageContainer>
											</TwoSmallGameContainer>
										</BigOnTopContainer>
									</Carusel>
								))}
							</ScrollView>
						</Wrapper>
						<View>
							<Title>Top winning this week</Title>
							<ScrollView
								showsHorizontalScrollIndicator={false}
								horizontal
								contentContainerStyle={{ paddingHorizontal: 20 }}
							>
								{list.map((item) => (
									<Carusel2>
										<TwoSmallGameContainer>
											<SmallImageContainer
												onPress={() =>
													this.props.navigation.navigate('GameScreen')
												}
											>
												<SmallImage
													resizeMode={'stretch'}
													source={require('image/image-6.png')}
												/>
											</SmallImageContainer>
											<SmallImageContainer
												onPress={() =>
													this.props.navigation.navigate('GameScreen')
												}
											>
												<SmallImage
													resizeMode={'stretch'}
													source={require('image/image-3.png')}
												/>
											</SmallImageContainer>
										</TwoSmallGameContainer>
									</Carusel2>
								))}
							</ScrollView>
						</View>
						<Add></Add>
					</Container>
				</ScrollView>
				<ScreenFooter navigation={this.props.navigation} />
			</View>
		);
	}
}

const Item = styled.Text``;
const BigOnTopContainer = styled.View`
	display: flex;
`;

const Container = styled.View`
	/* padding-left: 18px; */
`;
const Wrapper = styled.View`
	padding-top: 16px;
	height: 300px;
`;
const BigImageContainer = styled.TouchableOpacity`
	height: 142px;
	margin-bottom: 5px;
`;

const TwoSmallGameContainer = styled.TouchableOpacity`
	flex-direction: row;
`;

const SmallImageContainer = styled.TouchableOpacity`
	margin-right: 5px;
`;

const Carusel = styled.View`
	width: 190px;
	height: 384px;
	margin-right: 5px;
`;

const BigImage = styled.Image`
	width: 190px;
	height: 142px;
	border-radius: 3px;
`;

const SmallImage = styled.Image`
	width: 91px;
	height: 75px;
	border-radius: 3px;
`;

const Carusel2 = styled.View``;
const Title = styled.Text`
	margin-left: 18px;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	color: #333333;
	margin-bottom: 8px;
`;

export default PlayScreen;
