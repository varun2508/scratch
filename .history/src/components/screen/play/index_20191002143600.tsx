import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Header } from '@shared';
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
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header screenTitle='Game' />
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
									<ItemContainer>
										<Image
											style={{ marginRight: 5, borderRadius: 5 }}
											source={require('image/Group.png')}
										/>
										<Image source={require('image/Group.png')} />
									</ItemContainer>
									<Image
										style={{ borderRadius: 5 }}
										source={require('image/image.png')}
									/>
								</Carusel>
							))}
						</ScrollView>
					</Wrapper>
					<Wrapper>
						<Title>Top winning this week</Title>
						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal
							contentContainerStyle={{ paddingHorizontal: 20 }}
						>
							{list.map((item) => (
								<Carusel2 key={item}>
									<Image
										style={{ marginRight: 5, marginBottom: 5, borderRadius: 5 }}
										source={require('image/Group.png')}
									/>
									<Image source={require('image/Group.png')} />
								</Carusel2>
							))}
						</ScrollView>
					</Wrapper>
				</Container>
			</View>
		);
	}
}

const Item = styled.Text``;
const BigItemContainer = styled.View`
	flex: 1;
	background: blue;
`;
const Container = styled.View`
	/* padding-left: 18px; */
`;
const ItemContainer = styled.View`
	flex: 1;
	flex-direction: row;
`;
const Carusel = styled.View`
	width: 188px;
	height: 214px;
	margin-right: 5px;
`;
/* transform: rotate(180deg); */
const Carusel2 = styled.View``;
const Wrapper = styled.View`
	padding-top: 16px;
`;

const Title = styled.Text`
	margin-left: 18px;
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	color: #333333;
	margin-bottom: 8px;
`;

export default PlayScreen;
