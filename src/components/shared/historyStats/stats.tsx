import React from "react";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import styled from "styled-components/native";
import { sc } from "../../../assets/Styles";
import { Devider } from "../../ui/Deviders";

const Stats = function(props: Props): React.ReactElement {
	return (
		<View>
			<StatsBlock>
				<CardContaienr>
					<Card>
						<PointContainer>
							<Points>{Math.round(props.userWinRatio)}%</Points>
							<PointsText>My win ratio</PointsText>
						</PointContainer>
					</Card>
					<Card>
						<PointContainer>
							<Points>{Math.round(props.avgWinRatio)}%</Points>
							<PointsText>Avg. win ratio</PointsText>
						</PointContainer>
					</Card>
				</CardContaienr>
			</StatsBlock>
			<Devider />
		</View>
	);
};

const StatsBlock = styled.View``;

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
	width: 60px;
`;
const CardContaienr = styled.View`
	flex-direction: row;
	align-items: center;
`;
const PointContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const Card = styled.View`
	width: 45%;
	height: 76px;
	background: #fff;
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

export default Stats;
