import { Platform } from 'react-native';

export default {
	button: {
		marginTop: 30,
		marginBottom: 5,
		flexDirection: 'row',
		alignSelf: 'center',
		backgroundColor: '#000',
		borderRadius: 5,
		height: 50,
		paddingLeft: 10,
		paddingRight: 10,
	},
	footer: {
		height: 60,
		justifyContent: 'center',
	},
	footerTab: {
		backgroundColor: 'grey',
		height: 60,
		alignSelf: 'center',
		// flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10,
	},
	footerButton: {
		marginTop: -2,
	},
	plusButton: {
		backgroundColor: '#000',
		borderRadius: 50,
		minHeight: Platform.OS === 'ios' ? 100 : 71,
		height: Platform.OS === 'ios' ? 100 : 71,
		width: Platform.OS === 'ios' ? 45 : 1,
		minWidth: Platform.OS === 'ios' ? 45 : 1,
		alignSelf: 'center',
		paddingBottom: Platform.OS === 'ios' ? 20 : 17,
		marginBottom: -12,
		zIndex: 99,
	},
	arrowIcon: {
		paddingLeft: 4,
	},
	test: {
		borderWidth: 2,
		borderColor: 'red',
	},
	plusButtonText: { color: '#fff' },
	activeIndicator: {
		height: 10,
		width: 2,
		borderColor: '#000',
		borderWidth: 1,
		top: -2,
		position: 'absolute',
	},

	unRead: {
		height: 12,
		width: 12,
		backgroundColor: '#fa3e3e',
		zIndex: 50000,
		position: 'absolute',
		borderRadius: 6,
		top: 13,
		right: 23,
	},
};
