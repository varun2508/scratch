import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Text,
	RefreshControl,
	AsyncStorage,
} from "react-native";
import styled from "styled-components/native";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Overview from "./components/overview";
import ReferralList from "./components/referralList";
import { sc } from "../../assets/Styles/index";
import { useAppContext } from "../../providers/AppProvider";
import { getUserById } from "../../apis/auth";

const initialLayout = { width: Dimensions.get("window").width };
const { height } = Dimensions.get("window");
const Referrals = function(props: Props): React.ReactElement {
	const [index, setIndex] = React.useState(0);
	const [refreshing, setRefreshing] = React.useState(false);
	const { store, setUser } = useAppContext();
	const [routes] = React.useState([
		{ key: "0", title: "Overview" },
		{ key: "1", title: "Referral list" },
	]);
	async function getUser(): Promise<void> {
		const id = await AsyncStorage.getItem("scratchUserId");
		const user = await getUserById(id);
		setUser(user);
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getUser().then(() => setRefreshing(false));
	}, [refreshing]);

	const renderScene = SceneMap({
		"0": Overview,
		"1": ReferralList,
	});
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="My referrals" navigation={props.navigation} />
			<ContentContainer
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
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
			</ContentContainer>
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

const ContentContainer = styled.ScrollView`
	padding: 10px;
	margin-top: -15px;
	height: ${height - 200};
	background: ${sc.greyBackground};
`;

export default Referrals;
