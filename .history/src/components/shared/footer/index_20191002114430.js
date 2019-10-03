import React from 'react';

import { StackActions, NavigationActions } from 'react-navigation';
import IconFt from 'react-native-vector-icons/Feather';
import styles from './styles';

const ScreenFooter = ({
	navigation,
	addPostScreen,
	addPost,
	unRead,
	isEditPostScreen,
	editPost,
	isLoading,
}) => (
	<Footer style={styles.footer}>
		<FooterTab style={styles.footerTab}>
			<Button
				style={styles.footerButton}
				onPress={() => {
					navigation.dispatch(resetActionPostsScreen);
					// navigation.navigate('LatestPostsScreen');
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
					navigation.dispatch(resetActionMyProfileScreen);
					// navigation.navigate('MyProfileScreen');
				}}
			>
				{navigation.state.routeName === 'MyProfileScreen' && (
					<View style={styles.activeIndicator} />
				)}
				<IconFt size={20} name='user' />
			</Button>
			{renderPostButton(
				addPostScreen,
				isEditPostScreen,
				addPost,
				editPost,
				navigation,
				isLoading,
			)}

			<Button
				style={styles.footerButton}
				onPress={() => {
					navigation.dispatch(resetActionSearchScreen);
					// navigation.navigate('SearchScreen');
				}}
			>
				{navigation.state.routeName === 'SearchScreen' && (
					<View style={styles.activeIndicator} />
				)}
				<IconFt size={20} name='search' />
			</Button>
			<Button
				onPress={() => {
					navigation.navigate('NotificationsScreen');
				}}
				style={styles.footerButton}
			>
				{navigation.state.routeName === 'NotificationsScreen' && (
					<View style={styles.activeIndicator} />
				)}

				{unRead.length > 0 && <View style={styles.unRead} />}
				<IconFt size={20} name='bell' />
			</Button>
		</FooterTab>
	</Footer>
);

ScreenFooter.propTypes = {
	navigation: PropTypes.objectOf(PropTypes.any),
	addPostScreen: PropTypes.bool,
	isLoading: PropTypes.bool,
	isEditPostScreen: PropTypes.bool,
	addPost: PropTypes.func,
	editPost: PropTypes.func,
	unRead: PropTypes.arrayOf(PropTypes.any),
};
ScreenFooter.defaultProps = {
	navigation: {},
	addPostScreen: false,
	isEditPostScreen: false,
	isLoading: false,
	addPost: () => {},
	editPost: () => {},
	unRead: [],
};

export default ScreenFooter;
