import { StyleProp, TextStyle } from "react-native";

import { SFC } from "react";

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate: string;
	tockens: number;
	plan: string;
	referrals: Array<object>;
	referralCode: string;
	referralEarnings: number;
	usedReferrals: Array<string>;
	cashBalance: object;
	bankDetails: object;
	secretQuestions: object;
	notifications: object;
	winRatio: number;
	win: number;
	losses: number;
	totalUserGamesNumber: number;
	lastPlayedType: Array<string>;
	favorites: Array<string>;
}

export interface Notifications {
	data: object;
}
interface IconProps {
	style?: StyleProp<TextStyle>;
	width?: number | string;
	height?: number | string;
	children?: never;
}

export type IconType = SFC<IconProps>;
