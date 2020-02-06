import React from "react";
import {
	View,
	TouchableWithoutFeedback,
	ScrollView,
	Text,
	StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { ListItem } from "react-native-elements";
import { sc } from "../../../assets/Styles/index";
const itemsInfo = [
	{
		title: "Required participation age?",
		info:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
	},
	{
		title: "Are there withdrawal limits?",
		info:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
	},
	{
		title: "What do you need to play an online casino game?",
		info:
			"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
	},
	{
		title: "What withdrawal methods are available?",
		info:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	},
];

const Accordion = function(props): React.ReactElement {
	const [itemIndex, setItemIndex] = React.useState(0);
	const handleSection = (index) => {
		setItemIndex(index);
	};
	return (
		<View
			style={{
				flex: 1,
				height: "60%",
				marginBottom: 70,
				marginTop: -10,
			}}
		>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				{itemsInfo.map((item, i) => {
					return (
						<View>
							<TouchableWithoutFeedback
								onPress={(): void => handleSection(i)}
								key={item.title}
							>
								<ListItem
									title={item.title}
									leftIcon={{
										name: `${itemIndex === i ? "minus-circle" : "plus-circle"}`,
										type: "feather",
										size: 18,
									}}
									rightIcon={{}}
									titleStyle={{
										color: `${itemIndex === i ? sc.color.primary : "#333333"}`,
										fontWeight: "bold",
										fontSize: 18,
										lineHeight: 20,
									}}
								/>
							</TouchableWithoutFeedback>
							{itemIndex === i && <Info>{item.info}</Info>}
						</View>
					);
				})}
			</ScrollView>
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

const Info = styled.Text`
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
	color: #000;
	margin: 8px 25px;
`;

export default Accordion;
