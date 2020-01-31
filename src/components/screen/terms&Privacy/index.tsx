import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import ScreenFooter from "../../shared/footer/index";
import { Header } from "../../shared";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import TermsAndConditions from "./components/terms";
import Policy from "./components/policy";
// import {  } from "../../../assets/Styles";
import { sc } from "../../../assets/Styles/index";

const initialLayout = { width: Dimensions.get("window").width };

const TermsAndPrivacy = function(props: Props): React.ReactElement {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "0", title: "Terms & conditions" },
		{ key: "1", title: "Privacy policy" },
	]);

	const renderScene = SceneMap({
		"0": TermsAndConditions,
		"1": Policy,
	});
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="Terms & Privacy" />
			<Container>
				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={initialLayout}
					renderTabBar={(props) => (
						<TabBar
							{...props}
							indicatorStyle={{
								height: 2,
								marginTop: 6,
								backgroundColor: "red",
							}}
							indicatorContainerStyle={{
								marginTop: 6,
							}}
							tabStyle={{
								backgroundColor: "#fff",
								// borderWidth: 2,
								// borderColor: "red",
								marginTop: -5,
							}}
							getLabelText={({ route }) => {
								return (
									<View
										style={{
											backgroundColor: "#FFF",
										}}
									>
										<Text
											style={{
												color: +route.key === index ? sc.color.primary : "#000",
												fontSize: 15,
												fontWeight: "bold",
											}}
										>
											{route.title}
										</Text>
									</View>
								);
							}}
						/>
					)}
				/>
			</Container>
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
	tabBarTextStyle: {
		color: "red",
	},
	tabBarUnderlineStyle: {
		backgroundColor: "red",
	},
});

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
const StatusContainer = styled.View`
	height: 166px;
	border-radius: 5px;
	padding-left: 16;
	padding-right: 16;
	padding-top: 20;
	padding-bottom: 16px;
`;
export default TermsAndPrivacy;
