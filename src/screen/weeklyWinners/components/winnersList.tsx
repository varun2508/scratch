import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import IconFt from "react-native-vector-icons/Feather";
import { sc } from "../../../assets/Styles/index";
interface Props {
	players: [];
}
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

const WinnersList = function(props: Props): React.ReactElement {
	return (
		<ScrollView style={styles.container}>
			{props.players.length === 0 && (
				<NoResultsContainer>
					<IconFt name={"search"} size={38} color={sc.color.primary}></IconFt>
					<NoResults>No Results Found</NoResults>
				</NoResultsContainer>
			)}
			{props.players &&
				props.players.map(
					(el, i): React.ReactElement => {
						return (
							<WinnerRow
								key={el.id}
								style={i % 2 === 0 ? styles.whiteRow : styles.greyRow}
							>
								<FirstColumn>
									<PlayerName>
										{el.firstName || "-"} {el.lastName || "-"}
									</PlayerName>
									<WinInfo>
										<InfoText>Win,</InfoText>
										<Image
											style={{ marginLeft: 4, marginTop: 4 }}
											source={require("icons/coin.png")}
										/>
										<InfoText>{el.amount}</InfoText>
										<GameName>{el.gameName}</GameName>
									</WinInfo>
								</FirstColumn>
								<SecondColumn>
									<DateLabel>
										{format(new Date(el.date), "dd MMM yy")}
									</DateLabel>
									<DateLabel>{format(new Date(el.date), "HH:mm a")}</DateLabel>
								</SecondColumn>
							</WinnerRow>
						);
					}
				)}
		</ScrollView>
	);
};

export default WinnersList;

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
`;
const PlayerName = styled.Text`
	font-weight: bold;
	font-size: 16px;
	margin-left: 3;
`;
const DateLabel = styled.Text`
	color: #828282;
	font-size: 16px;
`;

const GameName = styled.Text`
	margin-left: 15;
`;
const NoResultsContainer = styled.View`
	height: 300px;
	/* border: 1px solid red; */
	justify-content: center;
	align-items: center;
`;

const NoResults = styled.Text`
	font-size: 25;
	color: ${sc.color.primary};
	margin-top: 15;
`;
