import React, { useEffect } from "react";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import {
	View,
	Image,
	TouchableWithoutFeedback,
	ScrollView,
	AsyncStorage,
	ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import { useAppContext } from "../../providers/AppProvider";
import { getUserById } from "../../apis/auth";
import { getNotifications } from "../../apis/notifications";

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
	navigateTo(screenName: string): void;
}
const StatusScreen = function(props: Props): React.ReactElement {
	const { store, setUser, setNotifications } = useAppContext();
	props.navigateTo = (screenName: string): void => {
		const { navigation } = props;
		navigation.navigate(screenName);
	};

	async function getUser(): Promise<void> {
		const id = await AsyncStorage.getItem("scratchUserId");
		const user = await getUserById(id);
		const notifications = await getNotifications(id);
		setUser(user);
		console.log("----notifications----in status--", notifications);
		setNotifications(notifications);
	}
	useEffect(() => {
		getUser();
	}, []);

	const { user } = store;
	if (!user.email) {
		return <ActivityIndicator size="large" color="#fe5b3b" />;
	}
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="My Balance" navigation={props.navigation} />
			<Container>
				<ScrollView style={{ marginBottom: 60 }}>
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
											source={require("icons/coin.png")}
										/>
										<Points>{user.tockens || 0}</Points>
										<PointsText>Tockens</PointsText>
									</PointContainer>
								</Card>
								<ButtonContainer>
									<TouchableWithoutFeedback
										onPress={(): boolean =>
											props.navigation.navigate("BuyTockens")
										}
									>
										<Button>BUY MORE</Button>
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
											source={require("icons/64.png")}
										/>
										<Points>15</Points>
										<PointsText>Tockens</PointsText>
									</PointContainer>
								</Card>
								<ButtonContainer>
									<TouchableWithoutFeedback>
										<Button>ADD FUNDS</Button>
									</TouchableWithoutFeedback>
									{/* <TouchableWithoutFeedback>
                    <Button>Withdraw to bank</Button>
                  </TouchableWithoutFeedback> */}
								</ButtonContainer>
							</CardContaienr>
						</OptionContainer>
					</Wrapper>
					{/* <CardMD>
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
          </CardMD> */}
				</ScrollView>
			</Container>
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
};

const Container = styled.View`
	flex: 1;
	padding-left: 17;
	padding-right: 17;
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
	width: 194px;
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

export default StatusScreen;
