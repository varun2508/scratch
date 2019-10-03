import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

// import { StackActions, NavigationActions } from 'react-navigation';
import NavButton from './navButton';
import IconFt from 'react-native-vector-icons/Feather';
import styles from './styles';

const ScreenFooter = ({ navigation }) => (
	<View style={styles.footer}>
		<View style={styles.footerTab}>
			<NavButton
				onClick={() => navigation.navigate('StatusScreen')}
				text={'Status & Balance'}
				imgSrc={require('icons/Status.png')}
			></NavButton>
			<NavButton
				onClick={() => navigation.navigate('StatusScreen')}
				text={'Play & Win'}
				imgSrc={require('icons/Play.png')}
			></NavButton>
			<NavButton
				onClick={() => navigation.navigate('StatusScreen')}
				imgStyle={{ width: 60, height: 35 }}
				text={'More'}
				imgSrc={require('icons/More.png')}
			></NavButton>
		</View>
	</View>
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
