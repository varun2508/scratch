import { createStackNavigator } from "react-navigation-stack";

import StatusScreen from "../../screen/status";
import PlayScreen from "../../screen/play";
import MoreScreen from "../../screen/more";
import BuyTockens from "../../screen/buy-tokens";
import GameScreen from "../../screen/game";
import TermsAndPrivacy from "../../screen/terms&Privacy";
import FAQs from "../../screen/faq";
import WeeklyWinners from "../../screen/weeklyWinners";
import MyHistory from "../../screen/myHistory";
import Notifications from "../../screen/notifications";

const routeConfig = {
	StatusScreen: {
		screen: StatusScreen,
		// navigationOptions: ({ navigation, screenProps }): object => {
		// 	const { theme } = screenProps;
		// 	return {
		// 		title: navigation.state.routeName,
		// 		headerStyle: {
		// 			backgroundColor: theme.background,
		// 		},
		// 		headerTitleStyle: { color: theme.fontColor },
		// 		headerTintColor: theme.tintColor,
		// 	};
		// },
		// path: 'intro',
	},
	PlayScreen: {
		screen: PlayScreen,
	},
	MoreScreen: {
		screen: MoreScreen,
	},
	BuyTockens: {
		screen: BuyTockens,
	},
	GameScreen: {
		screen: GameScreen,
	},
	TermsAndPrivacy: {
		screen: TermsAndPrivacy,
	},
	FAQs: {
		screen: FAQs,
	},
	WeeklyWinners: {
		screen: WeeklyWinners,
	},
	MyHistory: {
		screen: MyHistory,
	},
	Notifications: {
		screen: Notifications,
	},
};

const navigatorConfig = {
	initialRouteName: "StatusScreen",
	// mode: 'card',
	// headerMode: 'screen',
	headerMode: "none",
};

const AppStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

// interface Props {
//   navigation?: any;
//   theme?: object;
// }

// class RootNavigator extends React.Component<Props> {
//   private static router = AppStackNavigator.router;

//   public render() {
//     return (
//       <AppStackNavigator
//         navigation={this.props.navigation}
//         screenProps={{ theme: this.props.theme }}
//       />
//     );
//   }
// }

export default AppStackNavigator;
