import React from "react";
import { AsyncStorage, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import IconFt from "react-native-vector-icons/Feather";
import { sc } from "../../../assets/Styles/index";
import { readNotification } from "../../../apis/notifications";
import { useAppContext } from "../../../providers/AppProvider";

const styles = StyleSheet.create({
	whiteRow: {
		backgroundColor: "#fff",
		borderRadius: 5,
		padding: 5,
	},
	greyRow: {
		padding: 5,
	},
	container: {
		marginBottom: 170,
	},
});
interface Props {
	notifications: [];
}

const NotificationsList = function(props: Props): React.ReactElement {
	const { setNotifications, store } = useAppContext();
	const { data: notifications } = store.notifications;
	const handleRead = async (el) => {
		const id = await AsyncStorage.getItem("scratchUserId");
		const result = await readNotification({
			id: el.id,
			userId: id,
			data: {
				message: el.message,
				userId: el.userId,
				read: true,
				date: el.date,
			},
		});
		setNotifications(result);
	};
	return (
		<ScrollView style={styles.container}>
			{notifications && notifications.length === 0 && (
				<NoResultsContainer>
					<IconFt name={"search"} size={38} color={sc.color.primary}></IconFt>
					<NoResults>No Results Found</NoResults>
				</NoResultsContainer>
			)}
			{notifications[0] &&
				notifications.map(
					(el, i): React.ReactElement => {
						return (
							<WinnerRow
								key={el.id}
								style={i % 2 === 0 ? styles.whiteRow : styles.greyRow}
							>
								<FirstColumn>
									<WinInfo>
										<InfoText>{el.message}</InfoText>
									</WinInfo>
								</FirstColumn>
								<SecondColumn>
									{!el.read && (
										<ReadButton onPress={(): Promise => handleRead(el)}>
											<ReadButtonText>Mark as read</ReadButtonText>
										</ReadButton>
									)}
									<DateLabel>
										{format(new Date(el.date), "dd MMM yy")}
									</DateLabel>
								</SecondColumn>
							</WinnerRow>
						);
					}
				)}
		</ScrollView>
	);
};

export default NotificationsList;

const WinnerRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

const FirstColumn = styled.View``;
const WinInfo = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;
const InfoText = styled.Text`
	margin-left: 3;
`;

const SecondColumn = styled.View`
	width: 30%;
	align-items: center;
`;

const DateLabel = styled.Text`
	color: #828282;
	font-size: 16px;
`;

const NoResultsContainer = styled.View`
	height: 300px;
	justify-content: center;
	align-items: center;
`;

const NoResults = styled.Text`
	font-size: 25;
	color: ${sc.color.primary};
	margin-top: 15;
`;

const ReadButton = styled.TouchableOpacity`
	background-color: #fbdc42;
	border-radius: 25;
	width: 100;
	height: 30;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	margin-top: 1;
`;

const ReadButtonText = styled.Text`
	color: #333333;
	font-size: 12;
	font-weight: bold;
`;
