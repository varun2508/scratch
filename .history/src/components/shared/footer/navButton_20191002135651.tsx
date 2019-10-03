import {
	ActivityIndicator,
	ImageSourcePropType,
	ImageStyle,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';

import More from 'icons/More.png';
import Status from 'icons/Status.png';
import Play from 'icons/Play.png';

import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.View`
	background-color: #fff;
	align-self: center;
	border-width: 2;
	height: 52;
	border-color: grey;
	align-items: center;
	justify-content: center;
`;

const StyledText = styled.Text`
	font-size: 14;
	color: grey;
	width: 35;
`;

const StyledImage = styled.Image`
	width: 14;
	height: 24;
	position: absolute;
	left: 16;
`;

interface Props {
	testID?: string;
	isLoading?: boolean;
	isDisabled?: boolean;
	onClick?: () => void;
	style?: ViewStyle;
	disabledStyle?: ViewStyle;
	textStyle?: TextStyle;
	imgSrc?: ImageSourcePropType;
	imgStyle?: ImageStyle;
	indicatorColor?: string;
	activeOpacity?: number;
	text?: string;
}

function NavButton(props: Props): React.ReactElement {
	console.log('----------props', props);
	return (
		<TouchableOpacity
			testID={props.testID}
			activeOpacity={props.activeOpacity}
			onPress={props.onClick}
		>
			<StyledButton style={props.style}>
				<StyledImage style={props.imgStyle} source={props.imgSrc} />
				<StyledText style={props.textStyle}>{props.text}</StyledText>
			</StyledButton>
		</TouchableOpacity>
	);
}

NavButton.defaultProps = {
	isLoading: false,
	isDisabled: false,
	indicatorColor: 'white',
	activeOpacity: 0.5,
};

export default NavButton;
