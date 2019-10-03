import {
	ActivityIndicator,
	ImageSourcePropType,
	ImageStyle,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.View`
	background-color: #fff;
	align-self: center;
	border-radius: 4;
	border-width: 2;
	height: 52;
	border-color: grey;
	align-items: center;
	justify-content: center;
`;

const StyledButtonDisabled = styled(StyledButton)`
	background-color: ${({ theme }): string => theme.btnDisabled};
	border-color: rgb(200, 200, 200);
`;

const StyledText = styled.Text`
	font-size: 14;
	color: ${({ theme }): string => theme.btnPrimaryFont};
`;

const StyledImage = styled.Image`
	width: 24;
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
