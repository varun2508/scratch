import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { sc } from "../../../assets/Styles/index";
import { useAppContext } from "../../../providers/AppProvider";
import {
	NoResultsContainer,
	NoResults,
} from "../../../components/ui/viewComponents";
import IconFt from "react-native-vector-icons/Feather";
import { format } from "date-fns";

interface Props {
	referrals: [];
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

const ReferralList = function(props: Props): React.ReactElement {
	const { store } = useAppContext();
	const { user } = store;
	const { referrals } = user;

	if (referrals.length === 0) {
		return (
			<NoResultsContainer>
				<IconFt name={"search"} size={38} color={sc.color.primary}></IconFt>
				<NoResults>No Results Found</NoResults>
			</NoResultsContainer>
		);
	}
	return (
		<ScrollView style={styles.container}>
			<Wrapper>
				<TextContainer>
					<Title>{referrals.length} referrals</Title>
				</TextContainer>
				{referrals &&
					referrals.map(
						(el, i): React.ReactElement => {
							return (
								<WinnerRow
									key={el.id}
									style={i % 2 === 0 ? styles.whiteRow : styles.greyRow}
								>
									<FirstColumn>
										<GameName>
											{el.firstName} {el.lastName}
										</GameName>
										<WinInfo>
											<InfoText>Tockens earned:</InfoText>
											<Image
												style={{ marginLeft: 4, marginTop: 4 }}
												source={require("icons/coin.png")}
											/>
											{<WinText>{el.amount}</WinText>}
										</WinInfo>
									</FirstColumn>
									<SecondColumn>
										<DateLabel>
											{el.date && format(new Date(el.date), "dd MMM yy")}
										</DateLabel>
										<DateLabel>
											{el.date && format(new Date(el.date), "HH:mm a")}
										</DateLabel>
									</SecondColumn>
								</WinnerRow>
							);
						}
					)}
			</Wrapper>
		</ScrollView>
	);
};

const Wrapper = styled.View`
	border-bottom-width: 1px;
	border-bottom-color: #c6c6c9;
	padding-bottom: 16px;
`;

const Title = styled.Text`
	margin-top: 16px;
	font-weight: bold;
	font-size: 16px;
	color: #000;
`;

const TextContainer = styled.View`
	margin-bottom: 10px;
`;
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
export default ReferralList;
