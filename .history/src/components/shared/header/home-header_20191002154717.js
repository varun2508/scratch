import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
// import { Navigation } from 'react-native-navigation';

import { SideMenu } from 'shared';

const LeftButtons = ({
	handleModalState,
	screenTitle,
	handleBackPress,
	back,
}) => (
	<View
		style={{
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'row',
		}}
	>
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				height: 62,
				alignItems: 'center',
				justifyContent: 'center',
				paddingLeft: 16,
			}}
		>
			<TouchableWithoutFeedback onPress={handleBackPress}>
				{back ? (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Ionicons name='ios-arrow-back' size={24} color='#FFF' />
						<Text
							style={{
								color: '#fff',
								fontWeight: 'bold',
								fontSize: 28,
								marginRight: 16,
								marginLeft: 8,
							}}
						>
							{screenTitle}
						</Text>
					</View>
				) : (
					<Text
						style={{
							color: '#fff',
							fontWeight: 'bold',
							fontSize: 28,
							marginRight: 16,
						}}
					>
						{screenTitle}
					</Text>
				)}
			</TouchableWithoutFeedback>
			{screenTitle === 'Game' && <Icon name='search' size={24} color='#fff' />}
		</View>

		<View style={{}}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					marginRight: 16,
				}}
			>
				<FontAwesome5 name='crown' size={16} color='#FBDC42' />
				<TouchableWithoutFeedback onPress={handleModalState}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 28,
							color: '#FFB790',
							marginLeft: 6,
						}}
					>
						Silver
					</Text>
				</TouchableWithoutFeedback>
			</View>

			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
					marginRight: 16,
				}}
			>
				<Image style={{ marginRight: 4 }} source={require('icons/coin.png')} />
				<Text style={{ fontSize: 20, color: '#FBDC42', fontWeight: '900' }}>
					64
				</Text>
			</View>
		</View>
	</View>
);

const HomeHeader = ({ screenTitle, componentId, back, navigation }) => {
	const [isOpen, setModalState] = useState(false);
	const handleModalState = () => setModalState(!isOpen);

	const handleBackPress = () => navigation(componentId);

	return (
		<View style={{ display: 'flex', height: 110 }}>
			<LinearGradient
				colors={['#D8341D', '#FE5B3B']}
				start={{ x: 0.0, y: 0.25 }}
				end={{ x: 0.5, y: 1.0 }}
			>
				<Header
					barStyle='default'
					containerStyle={{
						backgroundColor: 'transparent',
						borderBottomWidth: 0,
						height: '10%',
					}}
				/>
				<View style={{ height: 70 }}>
					<LeftButtons
						handleModalState={handleModalState}
						screenTitle={screenTitle}
						handleBackPress={handleBackPress}
						back={back}
					/>
				</View>
			</LinearGradient>
			<SideMenu isOpen={isOpen} handleModalState={handleModalState} />
		</View>
	);
};

export default HomeHeader;
