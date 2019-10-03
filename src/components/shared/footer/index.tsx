import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

// import { StackActions, NavigationActions } from 'react-navigation';
import NavButton from './navButton';
import IconFt from 'react-native-vector-icons/Feather';
import { Footer, FooterTab } from './styles';

const ScreenFooter = ({ navigation }) => (
	<Footer>
		<FooterTab>
			<NavButton
				onClick={() => navigation.navigate('StatusScreen')}
				imgStyle={{ width: 28, height: 32 }}
				text={'Status & Balance'}
				imgSrc={require('icons/Status.png')}
			></NavButton>
			<NavButton
				onClick={() => navigation.navigate('PlayScreen')}
				text={'Play & Win'}
				imgSrc={require('icons/Play.png')}
			></NavButton>
			<NavButton
				onClick={() => navigation.navigate('MoreScreen')}
				imgStyle={{ width: 45, height: 10 }}
				text={'More'}
				imgSrc={require('icons/More.png')}
			></NavButton>
		</FooterTab>
	</Footer>
);

// ScreenFooter.propTypes = {
// 	navigation: PropTypes.objectOf(PropTypes.any),
// 	addPostScreen: PropTypes.bool,
// 	isLoading: PropTypes.bool,
// 	isEditPostScreen: PropTypes.bool,
// 	addPost: PropTypes.func,
// 	editPost: PropTypes.func,
// 	unRead: PropTypes.arrayOf(PropTypes.any),
// };
// ScreenFooter.defaultProps = {
// 	navigation: {},
// 	addPostScreen: false,
// 	isEditPostScreen: false,
// 	isLoading: false,
// 	addPost: () => {},
// 	editPost: () => {},
// 	unRead: [],
// };

export default ScreenFooter;
