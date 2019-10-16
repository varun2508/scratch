import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const NotTouchedContainer = styled.View`
	width: 95%;
	height: 50px;
	margin: 0 auto;
	background-color: #ececee;
	border-radius: 3px;
	align-items: center;
`;

const GreyContainerText = styled.Text`
	font-size: 18px;
	color: rgb(98, 98, 98);
	align-self: baseline;
	margin-top: 10px;
	margin-left: 10px;
	font-weight: bold;
`;

interface Props {
	winState?: string;
}

function Instructions(props: Props): React.ReactElement {
	return (
		<NotTouchedContainer>
			<GreyContainerText>Get 3 same to win!</GreyContainerText>
		</NotTouchedContainer>
	);
}

Instructions.defaultProps = {
	winState: '',
};

export default Instructions;
