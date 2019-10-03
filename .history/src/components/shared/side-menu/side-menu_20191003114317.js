import React from 'react';
import {
	View,
	Text,
	Modal,
	TouchableWithoutFeedback,
	Image,
	AsyncStorage,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ListItem } from 'react-native-elements';
import { logout } 'apis/auth';
// import { goToMain } from '../../navigation';

const myAccount = {
	title: 'My Account',
	icon: 'user',
};
const list = [
	{
		title: 'Account details',
		icon: 'user-check',
	},
	{
		title: 'My bank details',
		icon: 'credit-card',
	},
	{
		title: 'Secret questions',
		icon: 'lock',
	},
	{
		title: 'Notification settings',
		icon: 'bell',
	},
];

const blackList = [
	{
		title: 'My referals',
		icon: 'git-pull-request',
		type: 'feather',
		goTo: 'MyReferalsScreen',
	},
	{
		title: 'My play history',
		icon: 'history',
		type: 'font-awesome',
		goTo: 'MyHistoryScreen',
	},
	{
		title: 'Weekly winners',
		icon: 'calendar',
		type: 'feather',
		goTo: 'WeeklyWinnersScreen',
	},
	{
		title: 'Help',
		icon: 'life-buoy',
		type: 'font-awesome',
		goTo: 'HelpScreen',
	},
	{
		title: 'Notifications',
		icon: 'bell',
		type: 'feather',
		goTo: 'NotificationsScreen',
	},
	{
		title: 'Logout',
		icon: 'log-out',
		type: 'feather',
		goTo: 'logout',
	},
];

const iconStyles = {
	color: 'red',
};

class SideMenu extends React.Component {
	state = {
		isMyAccount: false,
	};

	logoutHandler = async () => {
		await AsyncStorage.removeItem('scratchToken');
		// goToMain();
	};

	navigateTo = (screenName) => {
		const { navigation } = this.props;
    console.log('----------screenName', screenName);
    if(screenName === 'logout') {
      logout
    }
	};

	render() {
		const { isOpen, handleModalState } = this.props;
		const { isMyAccount } = this.state;
		return (
			<Modal transparent animationType='slide' visible={isOpen}>
				<View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
					<View
						style={{
							flex: 1,
							marginTop: 160,
							backgroundColor: 'white',
							borderBottomLeftRadius: 5,
							borderBottomRightRadius: 5,
						}}
					>
						<View
							style={{
								height: 74,
								backgroundColor: '#F7F8FB',
								justifyContent: 'center',
							}}
						>
							<View
								style={{
									display: 'flex',
									justifyContent: 'center',
									justifyContent: 'space-between',
									alignItems: 'center',
									flexDirection: 'row',
									paddingRight: 24,
									paddingLeft: 24,
								}}
							>
								<View style={{ flexDirection: 'row', alignItems: 'center' }}>
									<Text
										style={{ color: '#828282', fontSize: 16, marginRight: 4 }}
									>
										Plan:
									</Text>
									<FontAwesome5 name='crown' size={14} color='#FBDC42' />
									<Text
										style={{
											color: '#333333',
											fontSize: 20,
											fontWeight: 'bold',
										}}
									>
										Silver
									</Text>
								</View>
								<TouchableWithoutFeedback>
									<Text
										style={{
											color: '#FE5B3B',
											fontSize: 16,
											fontWeight: 'bold',
										}}
									>
										upgrade
									</Text>
								</TouchableWithoutFeedback>
							</View>
						</View>
						<View>
							<TouchableWithoutFeedback
								onPress={() => this.setState({ isMyAccount: !isMyAccount })}
							>
								<ListItem
									title={myAccount.title}
									leftIcon={{ name: myAccount.icon, type: 'feather' }}
									rightIcon={{
										name: isMyAccount ? 'minus' : 'plus',
										color: '#BDBDBD',
										type: 'feather',
									}}
									titleStyle={{
										color: '#333333',
										fontWeight: 'bold',
										fontSize: 16,
										lineHeight: 16,
									}}
								/>
							</TouchableWithoutFeedback>

							<View
								style={{
									borderBottomWidth: 1,
									borderBottomColor: '#C6C6C9',
									marginRight: 16,
									marginLeft: 16,
								}}
							>
								{isMyAccount &&
									list.map((item, i) => (
										<ListItem
											containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
											key={i}
											onPress={() => this.navigateTo(item.goTo)}
											title={item.title}
											rightIcon={{
												name: 'keyboard-arrow-right',
												color: '#BDBDBD',
											}}
											leftIcon={{
												name: item.icon,
												color: '#828282',
												size: 16,
												type: 'feather',
											}}
											titleStyle={{
												color: '#4F4F4F',
												fontSize: 13,
												lineHeight: 16,
											}}
										/>
									))}
							</View>

							{blackList.map((item, i) => (
								<View
									key={i}
									style={{
										borderBottomWidth: 1,
										borderBottomColor: '#C6C6C9',
										marginRight: 16,
										marginLeft: 16,
									}}
								>
									<ListItem
										key={i}
										containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
										onPress={() => this.navigateTo(item.goTo)}
										title={item.title}
										rightIcon={{
											name: 'keyboard-arrow-right',
											color: '#BDBDBD',
										}}
										leftIcon={{ name: item.icon, type: item.type }}
										titleStyle={{
											color: '#333333',
											fontWeight: 'bold',
											fontSize: 16,
										}}
									/>
								</View>
							))}
						</View>
						<View
							style={{
								width: '100%',
								alignItems: 'flex-end',
								height: 100,
								position: 'absolute',
								bottom: -40,
							}}
						>
							<TouchableWithoutFeedback onPress={handleModalState}>
								<Image
									style={{ marginRight: 36 }}
									source={require('icons/close.png')}
								/>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}

export default SideMenu;
