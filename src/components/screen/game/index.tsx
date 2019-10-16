import { Image, View } from 'react-native';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
} from 'react-navigation';
import Add from '../../shared/add';
import GameHeader from './GameHeader';
// import { getString } from '../../../STRINGS';
import { Header } from '../../shared';
import Instructions from './Instructions';
import React from 'react';
import Results from './Results';
import ScratchView from 'react-native-scratch';
import styled from 'styled-components/native';
import { useAppContext } from '../../../providers/AppProvider';
import { User } from '../../types';
import { useThemeContext } from '../../../providers/ThemeProvider';

const Container = styled.View`
	flex: 1;
	align-self: stretch;
	overflow: scroll;
	background-color: ${({ theme }): string => theme.background};

	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
`;

const ContentWrapper = styled.View`
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
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

const ButtonWrapper = styled.View`
	position: absolute;
	flex-direction: column;
	bottom: 40;
	width: 85%;
	align-self: center;
`;

const StyledText = styled.Text`
	font-size: 18;
	line-height: 27;
	color: ${({ theme }): string => theme.fontColor};
`;

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const images = {
	1: require('../../../assets/icons/gameElements/1.png'),
	2: require('../../../assets/icons/gameElements/2.png'),
	3: require('../../../assets/icons/gameElements/3.png'),
	4: require('../../../assets/icons/gameElements/4.png'),
	5: require('../../../assets/icons/gameElements/5.png'),
	6: require('../../../assets/icons/gameElements/6.png'),
	7: require('../../../assets/icons/gameElements/7.png'),
	8: require('../../../assets/icons/gameElements/8.png'),
	9: require('../../../assets/icons/gameElements/9.png'),
	10: require('../../../assets/icons/gameElements/10.png'),
};

function GameScreen(props: Props): React.ReactElement {
	let timer: number;
	const { state, setUser } = useAppContext();
	const { changeThemeType } = useThemeContext();
	const [scrollEnabled, setScrollEnabled] = React.useState<boolean>(false);
	const [winState, setWinState] = React.useState<string>('notTouched');

	const imageRoute = `../../../assets/icons/gameElements/6.png`;
	const results = [[], [], [], [], [], []];

	const setCategory = () => {
		let category = Math.floor(Math.random() * 6 + 1);
		results[category - 1].push('match');
		console.log('-----results-----', category, results);
		return category;
	};
	const imageSelect = (category) => {
		console.log('-------imageSelect cate---', category, images[category]);
		return images[category];
	};
	const onImageLoadFinished = ({ id, success }): void => {
		// Do something
		console.log('-----image load finished', id, success);
	};

	const onScratchProgressChanged = ({ value, id }): void => {
		// Do domething like showing the progress to the user
		// console.log('----------image progress', value, id);
	};

	const onScratchDone = ({ isScratchDone, id }): void => {
		// Do something
		console.log('-----onScratchDone-----', isScratchDone, id);
		let userWins = false;
		results.forEach((el) => {
			if (el.length >= 3) {
				userWins = true;
			}
		});
		if (userWins) {
			setWinState('win');
		} else {
			setWinState('loosed');
		}
	};

	const onScratchTouchStateChanged = ({ id, touchState }): void => {
		// Example: change a state value to stop a containing
		// FlatList from scrolling while scratching
		// setScrollEnabled(!touchState);
		console.log('------onScratchTouchStateChanged----', touchState, id);
	};

	const GameElement = (): React.ReactElement => (
		<Image
			style={{
				marginRight: 5,
				marginBottom: 5,
				borderRadius: 5,
			}}
			source={imageSelect(setCategory())}
		/>
	);
	const ScratchGame = (): React.ReactElement => (
		<View style={{ margin: 10 }}>
			<GameContainer>
				<View
					style={{
						width: '100%',
						height: 120,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<GameElementContainer>
						<GameElement />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement />
					</GameElementContainer>
				</View>

				<View
					style={{
						width: '100%',
						height: 120,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 5,
					}}
				>
					<GameElementContainer>
						<GameElement />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement />
					</GameElementContainer>
					<GameElementContainer>
						<GameElement />
					</GameElementContainer>
				</View>
			</GameContainer>

			<ScratchView
				id={1} // ScratchView id (Optional)
				brushSize={50} // Default is 10% of the smallest dimension (width/height)
				threshold={50} // Report full scratch after 70 percentage, change as you see fit. Default is 50
				fadeOut={true} // Disable the fade out animation when scratch is done. Default is true
				placeholderColor='#AAAAAA' // Scratch color while image is loading (or while image not present)
				// imageUrl={{ uri: 'scratch' }} // A url to your image (Optional)
				resourceName={'scratch'} // An image resource name (without the extension like '.png/jpg etc') in the native bundle of the app (drawble for Android, Images.xcassets in iOS) (Optional)
				resizeMode='cover|contain|stretch' // Resize the image to fit or fill the scratch view. Default is stretch
				onImageLoadFinished={onImageLoadFinished} // Event to indicate that the image has done loading
				onTouchStateChanged={onScratchTouchStateChanged} // Touch event (to stop a containing FlatList for example)
				onScratchProgressChanged={onScratchProgressChanged} // Scratch progress event while scratching
				onScratchDone={onScratchDone} // Scratch is done event
			/>
		</View>
	);

	return (
		<View>
			<Header back screenTitle='Play & Win!' navigation={props.navigation} />

			<GameHeader imgSource={'image/image.png'} title={'Hit it Big'} />
			{winState === 'notTouched' && <ScratchGame />}
			{winState !== 'notTouched' && (
				<Results navigation={props.navigation} winState={winState} />
			)}

			<Instructions winState={winState} />
			<View>
				<Add style={{ borderWidth: 2, borderColor: 'red' }} />
				{/* <ScreenFooter navigation={props.navigation} /> */}
			</View>
		</View>
	);
}

export default GameScreen;
