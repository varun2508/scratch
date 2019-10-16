import {
	ActivityIndicator,
	ImageSourcePropType,
	ImageStyle,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
	View,
} from 'react-native';

import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
	width: 90%;
	height: 64px;
	margin: auto 0;
	margin-top: 15px;
	margin-bottom: 90px;
	align-self: center;
`;

interface Props {
	testID?: string;
	isLoading?: boolean;
	isDisabled?: boolean;
	onClick?: () => void;
	style?: ViewStyle;
	disabledStyle?: ViewStyle;
	textStyle?: TextStyle;
	imgLeftSrc?: ImageSourcePropType;
	imgLeftStyle?: ImageStyle;
	indicatorColor?: string;
	activeOpacity?: number;
	text?: string;
}

function Add(props: Props): React.ReactElement {
	if (props.isDisabled) {
		return (
			<View style={props.disabledStyle}>
				<StyledImage source={require('image/add.png')} resizeMode={'stretch'}>
					{props.text}
				</StyledImage>
			</View>
		);
	}
	if (props.isLoading) {
		return (
			<StyledImage
				source={require('image/add.png')}
				resizeMode={'stretch'}
			></StyledImage>
		);
	}
	return (
		<TouchableOpacity
			testID={props.testID}
			activeOpacity={props.activeOpacity}
			onPress={props.onClick}
		>
			<StyledImage
				source={require('image/add.png')}
				resizeMode={'stretch'}
			></StyledImage>
		</TouchableOpacity>
	);
}

Add.defaultProps = {
	isLoading: false,
	isDisabled: false,
};

export default Add;
