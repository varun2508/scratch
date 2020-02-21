import React, { useEffect } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import styled from "styled-components/native";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import ScreenFooter from "shared/footer";
import { Header, Add } from "shared";
import { getNotifications } from "../../apis/notifications";
import { useAppContext } from "../../providers/AppProvider";

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const PlayScreen = function(props: Props): React.ReactElement {
	const { setNotifications } = useAppContext();

	const checkForNotification = async (): Promise<void> => {
		const id = await AsyncStorage.getItem("scratchUserId");
		console.log("----------id", id);

		const notifications = await getNotifications({id});
		setNotifications(notifications);
	};

	useEffect(() => {
		checkForNotification();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="Game" navigation={props.navigation} />
			<ScrollView>
				<Container>
					<Wrapper>
						<Title>Featured</Title>

						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal
							contentContainerStyle={{
								paddingHorizontal: 20,
								flex: 1,
								justifyContent: "center",
							}}
						>
							<Carusel>
								<BigOnTopContainer>
									<BigImageContainer
										onPress={() =>
											props.navigation.navigate("GameScreen", {
												gameName: "hitItBig",
												gameLabel: "Hit It Big",
												gameCost: 30,
												canWin: 50,
												gameImage:
													"https://s3.eu-central-1.amazonaws.com/www.brosweb.co/scratch/Games/hitItBig/hitItBig.png",
											})
										}
									>
										<BigImage
											resizeMode={"contain"}
											source={require("image/hitItBig.png")}
										/>
										<CostViewContainer>
											<CostView>
												<CostIcon source={require("icons/yellowcoin.png")} />
												<CostAmountText>{30}</CostAmountText>
											</CostView>
										</CostViewContainer>
									</BigImageContainer>
									<BigImageContainer
										onPress={() =>
											props.navigation.navigate("GameScreen", {
												gameName: "candyBattle",
												gameLabel: "Candy Battle",
												gameCost: 20,
												canWin: 40,
												gameImage:
													"https://s3.eu-central-1.amazonaws.com/www.brosweb.co/scratch/Games/candyBattle/candy.png",
											})
										}
									>
										<BigImage
											resizeMode={"contain"}
											source={require("image/candy.png")}
										/>
										<CostViewContainer>
											<CostView>
												<CostIcon source={require("icons/yellowcoin.png")} />
												<CostAmountText>{20}</CostAmountText>
											</CostView>
										</CostViewContainer>
									</BigImageContainer>
									<BigImageContainer
										onPress={() =>
											props.navigation.navigate("GameScreen", {
												gameName: "extraJuicy",
												gameLabel: "Extra Juicy",
												gameCost: 40,
												canWin: 60,
												gameImage:
													"https://s3.eu-central-1.amazonaws.com/www.brosweb.co/scratch/Games/extraJuicy/extraJuicy.png",
											})
										}
									>
										<BigImage
											resizeMode={"contain"}
											source={require("image/extraJuicy.png")}
										/>
										<CostViewContainer>
											<CostView>
												<CostIcon source={require("icons/yellowcoin.png")} />
												<CostAmountText>{40}</CostAmountText>
											</CostView>
										</CostViewContainer>
									</BigImageContainer>
									{/* <TwoSmallGameContainer>
												<SmallImageContainer
													onPress={() =>
														props.navigation.navigate("GameScreen")
													}
												>
													<SmallImage
														resizeMode={"stretch"}
														source={require("image/image-9.png")}
													/>
													<CostViewContainer>
														<CostView>
															<CostIcon
																source={require("icons/yellowcoin.png")}
															/>
															<CostAmountText>{30}</CostAmountText>
														</CostView>
													</CostViewContainer>
												</SmallImageContainer>
												<SmallImageContainer
													onPress={() =>
														props.navigation.navigate("GameScreen")
													}
												>
													<SmallImage
														resizeMode={"stretch"}
														source={require("image/image-8.png")}
													/>
													<CostViewContainer>
														<CostView>
															<CostIcon
																source={require("icons/yellowcoin.png")}
															/>
															<CostAmountText>{30}</CostAmountText>
														</CostView>
													</CostViewContainer>
												</SmallImageContainer>
											</TwoSmallGameContainer> */}
								</BigOnTopContainer>
							</Carusel>
						</ScrollView>
					</Wrapper>
					<View>
						<Title>Top winning this week</Title>
						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal
							contentContainerStyle={{ paddingHorizontal: 20 }}
						>
							<Carusel2>
								<TwoSmallGameContainer>
									<SmallImageContainer
										onPress={() =>
											props.navigation.navigate("GameScreen", {
												gameName: "extraJuicy",
												gameLabel: "Extra Juicy",
												gameCost: 40,
												canWin: 60,
												gameImage:
													"https://s3.eu-central-1.amazonaws.com/www.brosweb.co/scratch/Games/extraJuicy/extraJuicy.png",
											})
										}
									>
										<SmallImage
											resizeMode={"stretch"}
											source={require("image/extraJuicy.png")}
										/>
										<CostViewContainer>
											<CostViewSmallIcons>
												<CostIcon source={require("icons/yellowcoin.png")} />
												<CostAmountText>{40}</CostAmountText>
											</CostViewSmallIcons>
										</CostViewContainer>
									</SmallImageContainer>
									<SmallImageContainer
										onPress={() =>
											props.navigation.navigate("GameScreen", {
												gameName: "hitItBig",
												gameLabel: "Hit It Big",
												gameCost: 30,
												canWin: 50,
												gameImage:
													"https://s3.eu-central-1.amazonaws.com/www.brosweb.co/scratch/Games/hitItBig/hitItBig.png",
											})
										}
									>
										<SmallImage
											resizeMode={"stretch"}
											source={require("image/hitItBig.png")}
										/>
										<CostViewContainer>
											<CostViewSmallIcons>
												<CostIcon source={require("icons/yellowcoin.png")} />
												<CostAmountText>{30}</CostAmountText>
											</CostViewSmallIcons>
										</CostViewContainer>
									</SmallImageContainer>
								</TwoSmallGameContainer>
							</Carusel2>
						</ScrollView>
					</View>
					<Add></Add>
				</Container>
			</ScrollView>
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
};

const BigOnTopContainer = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Container = styled.View`
	/* padding-left: 18px; */
`;
const Wrapper = styled.View`
	padding-top: 16px;
	/* height: 400px; */
	justify-content: center;
`;
const BigImageContainer = styled.TouchableOpacity`
	height: 200px;
	margin-bottom: 15px;
	justify-content: center;
`;

const TwoSmallGameContainer = styled.TouchableOpacity`
	flex-direction: row;
`;

const SmallImageContainer = styled.TouchableOpacity`
	margin-right: 5px;
`;

const Carusel = styled.View`
	width: 280px;
	/* height: 400px; */
	margin-right: 5px;
`;

const BigImage = styled.Image`
	width: 275px;
	height: 200px;
	border-radius: 3px;
`;

const CostViewContainer = styled.View`
	position: absolute;
	bottom: 3;
	right: 15;
`;

const CostView = styled.View`
	display: flex;
	flex-direction: row;
`;

const CostViewSmallIcons = styled.View`
	display: flex;
	flex-direction: row;
	margin-right: -13px;
	margin-bottom: -4px;
`;

const CostIcon = styled.Image`
	margin-left: 10px;
	margin-top: 8px;
	margin-right: 4px;
`;

const CostAmountText = styled.Text`
	font-size: 20px;
	color: #fbdc42;
	font-weight: 900;
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
