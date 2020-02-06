import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import ScreenFooter from "../../components/shared/footer/index";
import { Header } from "../../components/shared";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import Accordion from "./componets/accordionItem";
interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const FAQs = function(props: Props): React.ReactElement {
	const [index, setIndex] = React.useState(0);
	return (
		<View style={{ flex: 1 }}>
			<Header screenTitle="FAQs" navigation={props.navigation} />
			<Accordion />
			<ScreenFooter navigation={props.navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
	tabBarTextStyle: {
		color: "red",
	},
	tabBarUnderlineStyle: {
		backgroundColor: "red",
	},
});

const Text2 = styled.Text`
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	color: #fff;
	margin-top: 4px;
`;

export default FAQs;
