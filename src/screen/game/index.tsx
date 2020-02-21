import React, { useEffect } from "react";
import { Image, View, ActivityIndicator, Alert } from "react-native";
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from "react-navigation";
import Add from "../../components/shared/add";
import GameHeader from "./GameHeader";
// import { getString } from '../../../STRINGS';
import { Header } from "../../components/shared";
import Instructions from "./Instructions";
import Results from "./Results";
import ScratchView from "react-native-scratch";
import styled from "styled-components/native";
import { useAppContext } from "../../providers/AppProvider";
import { postGameResults, updateTockens } from "../../apis/user";
// import { getUserById } from '../../../apis/auth';
import * as Animatable from "react-native-animatable";
const Loader = styled.View`
	position: absolute;
	height: 105%;
	width: 100%;
	background: transparent;
	z-index: 100;
`;

const AnimationContainer = styled.View`
	flex-direction: row;
	width: 90%;
	justify-content: flex-end;
	margin-right: 60;
	margin-top: -20px;
`;

const GameContainer = styled.View`
	background: #f7f8fb;
	padding: 5px;
	margin: 10px;
`;

const GameElementContainer = styled.View`
	width: 32%;
	height: 100%;
	background-color: #fff;
	justify-content: center;
	align-items: center;
`;

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
	gameName: string;
}

function GameScreen(props: Props): React.ReactElement {
	const { store, getMe, setUser } = useAppContext();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [differenceAmount, setDifferenceAmount] = React.useState<string>("");
	const {
		gameName,
		gameCost,
		canWin,
		gameLabel,
		gameImage,
	} = props.navigation.state.params;

	const [winState, setWinState] = React.useState<string>("notTouched");
	const imageUrl = `https://s3.eu-central-1.amazonaws.com/www.brosweb.co/scratch/Games/${gameName}/`;
	const imageOrder = [];
	const results = [[], [], [], [], [], []];
	let winCategory;
	const { user } = store;
	const handleViewRef = (ref) => (view = ref);

	const bounce = () =>
		view
			.animate({
				0: {
					scale: 0,
					opacity: 0,
					translateY: 0,
					color: "#FBDC42",
				},
				0.2: {
					scale: 0,
					opacity: 1,
					translateY: 0,
					color: "#FBDC42",
				},
				0.5: {
					scale: 5,
					opacity: 0.5,
					translateY: -20,
					color: "#FBDC42",
				},
				1: {
					scale: 1,
					opacity: 0,
					translateY: -30,
					color: "#FBDC42",
				},
			})
			.then((endState) =>
				console.log(endState.finished ? "bounce finished" : "bounce cancelled")
			);
	const setCategory = () => {
		for (let index = 0; index < 6; index++) {
			const category = Math.floor(Math.random() * 6 + 1);
			results[category - 1].push(category);
			imageOrder.push(category);
		}
		results.forEach((elem, i) => {
			if (elem.length > 2) {
				winCategory = i + 1;
			}
		});
	};
	const takeGameCost = async () => {
		setDifferenceAmount(`-${gameCost}`);

		setIsLoading(true);
		if (user.tockens < gameCost) {
			Alert.alert("You don`t have enough tockens!");
			return props.navigation.navigate("StatusScreen", {});
		}
		const updatedUser = await updateTockens({
			userId: user.id,
			tockens: user.tockens - gameCost,
		});
		setUser(updatedUser);

		bounce();
		setIsLoading(false);
	};

	useEffect(() => {
		takeGameCost();
	}, []);

	const onImageLoadFinished = async ({ id, success }): void => {
		// Do something
		console.log("-----image load finished", id, success);
	};

	const onScratchProgressChanged = ({ value, id }): void => {
		// Do domething like showing the progress to the user
		// console.log('----------image progress', value, id);
	};

	const onScratchDone = async ({ isScratchDone, id }): Promise<void> => {
		// Do something
		// const { user } = store;

		console.log("-----onScratchDone---", isScratchDone, id, user);

		let userWins = false;
		let updatedUser;
		results.forEach((el) => {
			if (el.length >= 3) {
				userWins = true;
			}
		});

		if (userWins) {
			setWinState("win");
			setDifferenceAmount(`+${canWin}`);
			bounce();
			updatedUser = await postGameResults({
				userId: user.id,
				tockens: user.tockens + canWin,
				win: true,
				firstName: user.firstName,
				lastName: user.lastName,
				gameName: gameLabel,
				gameCost: gameCost,
				date: new Date(),
				amount: canWin,
			});
			console.log("----------before getupdatedUser", updatedUser);
			getMe(updatedUser);
		} else {
			setWinState("loosed");
			setDifferenceAmount("+5");
			bounce();
			updatedUser = await postGameResults({
				userId: user.id,
				tockens: user.tockens + 5,
				win: false,
				firstName: user.firstName,
				lastName: user.lastName,
				gameName: gameLabel,
				gameCost: gameCost,
				date: new Date(),
				amount: 5,
			});
			console.log("----------before getupdatedUser", updatedUser);
			getMe(updatedUser);
		}
	};

	const onScratchTouchStateChanged = ({ id, touchState }): void => {
		// Example: change a state value to stop a containing
		// FlatList from scrolling while scratching
		// setScrollEnabled(!touchState);
		console.log("------onScratchTouchStateChanged----", touchState, id);
	};

	const GameElement = ({ order }): React.ReactElement => {
		if (order === 1) {
			setCategory();
		}
		return (
			<Image
				style={{
					marginRight: 5,
					marginBottom: 5,
					borderRadius: 5,
					height: "70%",
					width: "70%",
					resizeMode: "stretch",
				}}
				source={{
					uri: `${imageUrl}${imageOrder[order - 1]}${
						winCategory === imageOrder[order - 1] ? "" : "-grey"
					}.png`,
				}}
			/>
		);
	};

	const ScratchGame = (): React.ReactElement => (
		<View style={{ margin: 10 }}>
			<GameContainer>
				<View
					style={{
						width: "100%",
						height: 120,
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<GameElementContainer>
						<GameElement order={1} />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement order={2} />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement order={3} />
					</GameElementContainer>
				</View>

				<View
					style={{
						width: "100%",
						height: 120,
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 5,
					}}
				>
					<GameElementContainer>
						<GameElement order={4} />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement order={5} />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement order={6} />
					</GameElementContainer>
				</View>
			</GameContainer>

			<ScratchView
				id={1} // ScratchView id (Optional)
				brushSize={50} // Default is 10% of the smallest dimension (width/height)
				threshold={50} // Report full scratch after 70 percentage, change as you see fit. Default is 50
				fadeOut={true} // Disable the fade out animation when scratch is done. Default is true
				placeholderColor="#AAAAAA" // Scratch color while image is loading (or while image not present)
				// imageUrl={{ uri: 'scratch' }} // A url to your image (Optional)
				resourceName={"scratch"} // An image resource name (without the extension like '.png/jpg etc') in the native bundle of the app (drawble for Android, Images.xcassets in iOS) (Optional)
				resizeMode="cover|contain|stretch" // Resize the image to fit or fill the scratch view. Default is stretch
				onImageLoadFinished={onImageLoadFinished} // Event to indicate that the image has done loading
				onTouchStateChanged={onScratchTouchStateChanged} // Touch event (to stop a containing FlatList for example)
				onScratchProgressChanged={onScratchProgressChanged} // Scratch progress event while scratching
				onScratchDone={onScratchDone} // Scratch is done event
			/>
		</View>
	);

	return (
		<View>
			<Header screenTitle="Play & Win!" navigation={props.navigation} />
			<AnimationContainer>
				<Animatable.Text
					ref={handleViewRef}
					duration={3000}
					style={{ color: "#FFF", fontWeight: "900" }}
				>
					{differenceAmount}
				</Animatable.Text>
			</AnimationContainer>
			<GameHeader imgSource={gameImage} title={gameLabel} />
			{isLoading && (
				<Loader>
					<ActivityIndicator
						style={{
							marginTop: "80%",
						}}
						size="large"
						color="#fe5b3b"
					/>
				</Loader>
			)}

			{winState === "notTouched" && <ScratchGame />}
			{winState !== "notTouched" && (
				<Results
					navigation={props.navigation}
					winState={winState}
					amountWon={differenceAmount}
				/>
			)}
			<Instructions winState={winState} />
			<View>
				<Add style={{ borderWidth: 2, borderColor: "red" }} />
				{/* <ScreenFooter navigation={props.navigation} /> */}
			</View>
		</View>
	);
}

export default GameScreen;
