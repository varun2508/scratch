import { StyleProp, TextStyle } from 'react-native';

import { SFC } from 'react';

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	birthDate: string;
	tockens: number;
	plan: string;
	id: string;
}
interface IconProps {
	style?: StyleProp<TextStyle>;
	width?: number | string;
	height?: number | string;
	children?: never;
}

export type IconType = SFC<IconProps>;
