import React, { useEffect } from "react";
import { View, Dimensions, RefreshControl, AsyncStorage } from "react-native";
import styled from "styled-components/native";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import { getMyHistory } from "../../apis/stats";
import { sc } from "../../assets/Styles";
import HistoryList from "./components/historyList";
import Stats from "./components/stats";
interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const { height } = Dimensions.get("window");

const MyHistory = function(props: Props): React.ReactElement {
	const [gameList, setGameList] = React.useState([]);
	const [refreshing, setRefreshing] = React.useState(false);

	async function getStats() {
		const id = await AsyncStorage.getItem("scratchUserId");
		const stats = await getMyHistory(id);
		setGameList(stats);
		console.log("----------stats in my history", stats);
		return stats;
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		getStats().then(() => setRefreshing(false));
	}, [refreshing]);

	useEffect(() => {
		console.log("--------calling hook--");
		getStats();
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="My play history" navigation={props.navigation} />
			<ContentContainer
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{/* <Stats avgWinRatio={playersList.avgWinRatio} /> */}
				<HistoryList games={gameList} />
			</ContentContainer>
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
};

const ContentContainer = styled.ScrollView`
	padding: 10px;
	margin-top: -15px;
	height: ${height - 200};
	background: ${sc.greyBackground};
`;

export default MyHistory;
