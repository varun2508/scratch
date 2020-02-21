import React, { useEffect, useState } from "react";
import { View, Dimensions, RefreshControl, AsyncStorage } from "react-native";
import styled from "styled-components/native";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import { getMyHistory, getGeneralStats } from "../../apis/stats";
import { sc } from "../../assets/Styles";
import { useAppContext } from "../../providers/AppProvider";
import { getUserById } from "../../apis/auth";
import HistoryList from "./components/historyList";
import Stats from "../../components/shared/historyStats/stats";
interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const { height } = Dimensions.get("window");

const MyHistory = function(props: Props): React.ReactElement {
	const [gameList, setGameList] = React.useState([]);
	const [refreshing, setRefreshing] = React.useState(false);
	const { store, setUser } = useAppContext();
	const [generalStats, setGeneralStats] = useState([]);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getStats().then(() => setRefreshing(false));
	}, [refreshing]);

	async function getStats() {
		setRefreshing(true);
		const id = await AsyncStorage.getItem("scratchUserId");
		const stats = await getMyHistory(id);
		const general = await getGeneralStats();
		setGeneralStats(general);
		setGameList(stats);
		setRefreshing(false);
		return stats;
	}

	async function getUser(): Promise<void> {
		const id = await AsyncStorage.getItem("scratchUserId");
		const user = await getUserById(id);
		setUser(user);
	}
	useEffect(() => {
		getUser();
		getStats();
	}, []);
	const { user } = store;
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="My play history" navigation={props.navigation} />
			<ContentContainer
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<Stats
					avgWinRatio={generalStats[0] ? generalStats[0].avgWinRatio : 0}
					userWinRatio={user.winRatio}
				/>
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
