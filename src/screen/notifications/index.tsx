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
import { sc } from "../../assets/Styles";
import { useAppContext } from "../../providers/AppProvider";
import { getNotifications } from "../../apis/notifications";
import NotificationsList from "./components/notificationsList";
interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const { height } = Dimensions.get("window");

const Notifications = function(props: Props): React.ReactElement {
	const [refreshing, setRefreshing] = React.useState(false);
	const { store, setNotifications } = useAppContext();

	async function handleGetNotifications() {
		const id = await AsyncStorage.getItem("scratchUserId");
		const notifStore = await getNotifications(id);
		setNotifications(notifStore);
		return notifStore;
	}

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		handleGetNotifications().then(() => setRefreshing(false));
	}, [refreshing]);

	useEffect(() => {
		handleGetNotifications();
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="Notifications" navigation={props.navigation} />
			<ContentContainer
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{/* <Stats
					avgWinRatio={generalStats[0] ? generalStats[0].avgWinRatio : 0}
					userWinRatio={user.winRatio}
				/> */}
				<NotificationsList />
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

export default Notifications;
