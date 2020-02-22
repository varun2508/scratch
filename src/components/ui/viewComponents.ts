import styled from "styled-components/native";
import { sc } from "../../assets/Styles/index";

export const NoResultsContainer = styled.View`
	height: 300px;
	justify-content: center;
	align-items: center;
`;

export const NoResults = styled.Text`
	font-size: 25;
	color: ${sc.color.primary};
	margin-top: 15;
`;
