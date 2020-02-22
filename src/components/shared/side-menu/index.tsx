import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Modal,
	TouchableWithoutFeedback,
	Image,
	AsyncStorage,
	ScrollView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ListItem } from "react-native-elements";
import { logout } from "../../../apis/auth";
import { useAppContext } from "../../../providers/AppProvider";

const blackList = [
	{
		title: "My referrals",
		icon: "git-pull-request",
		type: "feather",
		goTo: "Referrals",
	},
	{
		title: "My play history",
		icon: "history",
		type: "font-awesome",
		goTo: "MyHistory",
	},
	{
		title: "Weekly winners",
		icon: "calendar",
		type: "feather",
		goTo: "WeeklyWinners",
	},
	{
		title: "Help",
		icon: "life-buoy",
		type: "font-awesome",
		goTo: "HelpScreen",
	},
	{
		title: "Notifications",
		icon: "bell",
		type: "feather",
		goTo: "Notifications",
	},
	{
		title: "Logout",
		icon: "log-out",
		type: "feather",
		goTo: "logout",
	},
];

const myAccount = {
	title: "My Account",
	icon: "user",
};
const myAccountSublist = [
	{
		title: "Account details",
		icon: "user-check",
	},
	{
		title: "My bank details",
		icon: "credit-card",
	},
	{
		title: "Secret questions",
		icon: "lock",
	},
	{
		title: "Notification settings",
		icon: "bell",
	},
];

const helpSublist = [
	{
		title: "FAQs",
		icon: "question",
		type: "SimpleLineIcons",
		goTo: "FAQs",
	},
	{
		title: "Terms & Privacy Policy",
		icon: "file-text",
		type: "feather",
		goTo: "TermsAndPrivacy",
	},
];

const iconStyles = {
	color: "red",
};

const SideMenu = ({ navigation, isOpen, handleModalState }) => {
	const [isMyAccount, handleMyAccounSection] = useState(false);
	const [helpOpened, handleHelpOpened] = useState(false);
	const [unreadNotifiction, handleUnreadNotification] = useState(false);

	const { store } = useAppContext();
	const { unread } = store.notifications;
	const navigateTo = (screenName) => {
		if (screenName === "logout") {
			logout();
		}
		handleModalState();
		navigation.navigate(screenName);
	};

	return (
		<Modal transparent animationType="slide" visible={isOpen}>
			<View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
				<View
					style={{
						flex: 1,
						marginTop: 160,
						backgroundColor: "white",
						borderBottomLeftRadius: 5,
						borderBottomRightRadius: 5,
					}}
				>
					<View
						style={{
							height: 74,
							backgroundColor: "#F7F8FB",
							justifyContent: "center",
						}}
					>
						{/* <View
								style={{
									display: 'flex',
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
							</View> */}
						<View
							style={{
								// width: '100%',
								alignItems: "flex-end",
								height: 40,
								marginTop: 5,
								// borderWidth: 2,
								// borderColor: 'red',
								// position: 'absolute',
								// bottom: -40,
							}}
						>
							<TouchableWithoutFeedback onPress={handleModalState}>
								<Image
									style={{ marginRight: 15 }}
									source={require("icons/close.png")}
								/>
							</TouchableWithoutFeedback>
						</View>
					</View>
					<ScrollView>
						{/* <TouchableWithoutFeedback
							onPress={(): void => handleMyAccounSection(!isMyAccount)}
						>
							<ListItem
								title={myAccount.title}
								leftIcon={{
									name: myAccount.icon,
									type: "feather",
								}}
								rightIcon={{
									name: isMyAccount ? "minus" : "plus",
									color: "#BDBDBD",
									type: "feather",
								}}
								titleStyle={{
									color: "#333333",
									fontWeight: "bold",
									fontSize: 16,
									lineHeight: 16,
								}}
							/>
						</TouchableWithoutFeedback> */}

						{/* <View
							style={{
								borderBottomWidth: 1,
								borderBottomColor: "#C6C6C9",
								marginRight: 16,
								marginLeft: 16,
							}}
						>
							{isMyAccount &&
								myAccountSublist.map((item, i) => (
									<ListItem
										containerStyle={{
											paddingLeft: 0,
											paddingRight: 0,
										}}
										key={i}
										onPress={(): void => navigateTo(item.goTo)}
										title={item.title}
										rightIcon={{
											name: "keyboard-arrow-right",
											color: "#BDBDBD",
										}}
										leftIcon={{
											name: item.icon,
											color: "#828282",
											size: 16,
											type: "feather",
										}}
										titleStyle={{
											color: "#4F4F4F",
											fontSize: 13,
											lineHeight: 16,
										}}
									/>
								))}
						</View> */}

						{blackList.map((item, i) => {
							if (item.title === "Help") {
								return (
									<View
										key={i}
										style={{
											borderBottomWidth: 1,
											borderBottomColor: "#C6C6C9",
											marginRight: 16,
											marginLeft: 16,
										}}
									>
										<TouchableWithoutFeedback>
											<ListItem
												key={i}
												containerStyle={{
													paddingLeft: 0,
													paddingRight: 0,
												}}
												onPress={(): void => handleHelpOpened(!helpOpened)}
												title={item.title}
												leftIcon={{
													name: item.icon,
													type: "feather",
												}}
												rightIcon={{
													name: helpOpened ? "minus" : "plus",
													color: "#BDBDBD",
													type: "feather",
												}}
												titleStyle={{
													color: "#333333",
													fontWeight: "bold",
													fontSize: 16,
													lineHeight: 16,
												}}
											/>
										</TouchableWithoutFeedback>
										<View
											style={{
												marginRight: 0,
												marginLeft: 4,
											}}
										>
											{helpOpened &&
												helpSublist.map((item, i) => (
													<ListItem
														containerStyle={{
															paddingLeft: 0,
															paddingRight: 0,
															marginTop: -10,
														}}
														key={i}
														onPress={(): void => navigateTo(item.goTo)}
														title={item.title}
														rightIcon={{
															name: "keyboard-arrow-right",
															color: "#BDBDBD",
														}}
														leftIcon={{
															name: item.icon,
															color: "#828282",
															size: 20,
															type: "feather",
															width: 20,
														}}
														titleStyle={{
															color: "#4F4F4F",
															fontSize: 13,
															lineHeight: 16,
															marginLeft: 0,
														}}
													/>
												))}
										</View>
									</View>
								);
							}
							return (
								<View
									key={i}
									style={{
										borderBottomWidth: 1,
										borderBottomColor: "#C6C6C9",
										marginRight: 16,
										marginLeft: 16,
									}}
								>
									<ListItem
										key={i}
										containerStyle={{
											paddingLeft: 0,
											paddingRight: 0,
										}}
										onPress={(): void => navigateTo(item.goTo)}
										title={item.title}
										rightIcon={{
											name: "keyboard-arrow-right",
											color: "#BDBDBD",
										}}
										leftIcon={{
											name: item.icon,
											type: item.type,
											color: `${
												item.title === "Notifications" && unread > 0
													? "red"
													: "#BDBDBD"
											}`,
										}}
										titleStyle={{
											color: "#333333",
											fontWeight: "bold",
											fontSize: 16,
										}}
									/>
								</View>
							);
						})}
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
};

export default SideMenu;
