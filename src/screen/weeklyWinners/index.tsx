import React, { useEffect } from "react";
import { View, Dimensions, RefreshControl } from "react-native";
import styled from "styled-components/native";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import { useAppContext } from "../../providers/AppProvider";

import { getWeelyTop } from "../../apis/stats";
import { sc } from "../../assets/Styles";
import WinnersList from "./components/winnersList";
import Stats from "../../components/shared/historyStats/stats";
interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const { height } = Dimensions.get("window");

const WeeklyWinners = function(props: Props): React.ReactElement {
	const [playersList, setPlayersList] = React.useState({
		top: [],
		avgWinRatio: "",
	});
	const [refreshing, setRefreshing] = React.useState(false);
	const { store, setUser } = useAppContext();

	async function getStats() {
		setRefreshing(true);

		const stats = await getWeelyTop();
		setPlayersList(stats[0]);
		setRefreshing(false);

		return stats;
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);

		getStats().then(() => setRefreshing(false));
	}, [refreshing]);

	useEffect(() => {
		getStats();
	}, []);
	const { user } = store;

	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="Weekly top wins" navigation={props.navigation} />
			<ContentContainer
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<Stats
					avgWinRatio={playersList.avgWinRatio}
					userWinRatio={user.winRatio}
				/>
				<WinnersList players={playersList.top} />
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

export default WeeklyWinners;
