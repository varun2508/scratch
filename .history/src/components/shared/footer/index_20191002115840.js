import React from 'react';
import { View, Button } from 'react-native';

import { StackActions, NavigationActions } from 'react-navigation';
import IconFt from 'react-native-vector-icons/Feather';
import styles from './styles';

const ScreenFooter = ({ navigation }) => (
	<View style={styles.footer}>
		<View style={styles.footerTab}>
			<Button
				style={styles.footerButton}
				onPress={() => {
					// navigation.dispatch(resetActionPostsScreen);
					navigation.navigate('LatestPostsScreen');
				}}
			>
				{navigation.state.routeName === 'LatestPostsScreen' && (
					<View style={styles.activeIndicator} />
				)}
				<IconFt size={20} name='layers' />
			</Button>
			<Button
				style={styles.footerButton}
				onPress={() => {
					// navigation.dispatch(resetActionMyProfileScreen);
					navigation.navigate('MyProfileScreen');
				}}
			>
				{navigation.state.routeName === 'MyProfileScreen' && (
					<View style={styles.activeIndicator} />
				)}
				<IconFt size={20} name='user' />
			</Button>
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
