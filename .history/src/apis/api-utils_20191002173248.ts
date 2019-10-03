import { Alert, AsyncStorage } from 'react-native';
import NavigationService from '../services/navigation';

import { logOutReq } from '../redux-controller/user';

const ApiUtils = {
	/* eslint-disable */
	checkStatus: async (response, options, url) => {
		console.log(
			'-response in utils--',
			response.status || response.status_code,
			'url:',
			url,
		);
		if (
			response.status === 400 &&
			response.url.indexOf('login/facebook') !== -1
		) {
			let parced = null;
			parced = await response.json();

			const keys = Object.keys(parced.errors);
			console.log('parced.errors', parced.errors);

			keys.map((key) => {
				if (parced.errors[key][0] === 'The email has already been taken.') {
					Alert.alert('Error', parced.errors[key][0]);
				}

				if (parced.errors[key][0] === 'The role field is required.') {
					Alert.alert(
						'Error',
						`You don't have "The Crafty Barkeep" account yet. Complete the application form below.`,
					);
				}
			});

			NavigationService.navigate('FacebokLogInScreen', { from: 'LogIn' });
			throw new Error('message');
		}
		if (response.status_code === 401 || response.status === 401) {
			console.log('Unauthenticated!!');
			AsyncStorage.removeItem('scratchToken', () => {
				NavigationService.navigate('LoginScreen');
			});
			throw new Error('Please log in. Session expired!!!');
			// return null;
		} else if (response.status === 404) {
			let parced = null;
			parced = await response.json();
			console.log('parced in 404', parced);
			NavigationService.navigate('StatusScreen');
			throw new Error(parced.errors.message);
		}

		if (response.status === 500 || response.status === 400) {
			let parced = null;
			parced = await response.json();
			console.log('parced in 500');
			const keys = Object.keys(parced.errors);
		}
		if (response.ok) {
			console.log('response ok----------');
			return response;
		} else {
			let parced = null;
			parced = await response.json();
			console.log('parced in error(not 400 or 500)', parced);
			if (parced.errors) {
				Alert.alert('Error', JSON.stringify(parced.errors));
			} else {
				Alert.alert('Error', JSON.stringify(parced));
			}
			throw new Error(response);
		}
	},
	/* eslint-enable */
	getBaseUrl: () => 'http://app.thecraftybarkeep.com/api',
	getImageUrl: () => 'http://app.thecraftybarkeep.com',
};
export { ApiUtils as default };
