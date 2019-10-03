import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	);
}

function goBack(key) {
	_navigator.dispatch(
		NavigationActions.back({
			key: key,
		}),
	);
}

// add other navigation functions that you need and export them
const loh = { loh: 23 };
export default loh;
