import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

// import { StackActions, NavigationActions } from 'react-navigation';
import NavButton from './navButton';
import IconFt from 'react-native-vector-icons/Feather';
import styles from './styles';

const ScreenFooter = ({ navigation }) => (
	<View style={styles.footer}>
		<View style={styles.footerTab}>
			<NavButton text={'Play and Win'} imgSrc={'icons/More.png'}></NavButton>
			<TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
				<View style={{}}>
					<Text style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}>
						Login
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
				<View style={{}}>
					<Text style={{ color: '#FE5B3B', fontSize: 16, fontWeight: 'bold' }}>
						Login
					</Text>
				</View>
			</TouchableOpacity>
			{/* <Button
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
			</Button> */}
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
