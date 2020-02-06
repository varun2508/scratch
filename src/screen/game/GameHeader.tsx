import { ImageSourcePropType, TextStyle, View } from 'react-native';
import IconFt from 'react-native-vector-icons/Feather';

import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
	flex-direction: row;
	margin-left: 10px;
`;

const StyledImage = styled.Image`
	width: 54;
	height: 54;
`;

const StyledTitle = styled.Text`
	font-size: 20;
  font-weight: bold;
	/* color: ${({ theme }): string => theme.btnPrimaryFont}; */
`;

const TitleContainer = styled.View`
	flex-direction: row;
	width: 60%;
	margin-left: 10px;
`;

const IconContainer = styled.View`
	flex-direction: row;
	margin-left: 20px;
	padding-top: 5px;
`;

interface Props {
	textStyle?: TextStyle;
	title?: string;
	imgSource: string;
}

function GameHeader(props: Props): React.ReactElement {
	return (
		<HeaderContainer>
			<StyledImage source={require('image/image.png')} />
			<TitleContainer>
				<StyledTitle style={props.textStyle}>{props.title}</StyledTitle>
			</TitleContainer>
			<IconContainer>
				<IconFt size={25} color={'#df3b22'} name={'heart'}></IconFt>
			</IconContainer>
		</HeaderContainer>
	);
}

GameHeader.defaultProps = {
	title: '',
	imgSource: '',
};

export default GameHeader;
