import React from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import { format } from "date-fns";
import IconFt from "react-native-vector-icons/Feather";
import { sc } from "../../../assets/Styles/index";
import {
	NoResultsContainer,
	NoResults,
} from "../../../components/ui/viewComponents";

interface Props {
	games: [];
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
const HistoryList = function(props: Props): React.ReactElement {
	return (
		<ScrollView style={styles.container}>
			{props.games.length === 0 && (
				<NoResultsContainer>
					<IconFt name={"search"} size={38} color={sc.color.primary}></IconFt>
					<NoResults>No Results Found</NoResults>
				</NoResultsContainer>
			)}
			{props.games &&
				props.games.map(
					(el, i): React.ReactElement => {
						return (
							<WinnerRow
								key={el.id}
								style={i % 2 === 0 ? styles.whiteRow : styles.greyRow}
							>
								<FirstColumn>
									<GameName>{el.gameName}</GameName>
									<WinInfo>
										<InfoText>{el.win ? "Won" : "Lost"},</InfoText>
										<Image
											style={{ marginLeft: 4, marginTop: 4 }}
											source={require("icons/coin.png")}
										/>
										{el.win ? (
											<WinText>{el.amount}</WinText>
										) : (
											<LoseText>-{el.gameCost - el.amount}</LoseText>
										)}
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

export default HistoryList;

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
const WinText = styled.Text`
	margin-left: 3;
	color: green;
`;
const LoseText = styled.Text`
	margin-left: 3;
	color: red;
`;
const SecondColumn = styled.View`
	width: 30%;
`;
const GameName = styled.Text`
	font-weight: bold;
	font-size: 16px;
	margin-left: 3;
`;
const DateLabel = styled.Text`
	color: #828282;
	font-size: 16px;
`;
