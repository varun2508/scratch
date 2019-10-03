import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import React from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

import { Theme } from '../../theme';
import AuthLoadingScreen from '../screen/authentificationLoading';
import { useThemeContext } from '../../providers/ThemeProvider';
import TabNavigator from './TabNavigator';

const SwitchNavigator = createSwitchNavigator(
	// {
	// 	AuthStackNavigator,
	// },
	// {
	// 	initialRouteName: 'AuthStackNavigator',
	// },
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStackNavigator,
		Auth: AuthStackNavigator,
		Tab: TabNavigator,
	},
	{
		initialRouteName: 'AuthLoading',
	},
);

const AppContainer = createAppContainer(SwitchNavigator);

export interface ScreenProps {
	theme: Theme;
}

export default function Navigator(): React.ReactElement {
	const { theme } = useThemeContext();
	return <AppContainer screenProps={{ theme }} />;
}
