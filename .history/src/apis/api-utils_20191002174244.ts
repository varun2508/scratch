import { Alert, AsyncStorage } from 'react-native';
import NavigationService from '../components/navigation/NavigationService';

const ApiUtils = {
	/* eslint-disable */
	checkStatus: async (response, options) => {
		console.log(
			'-response in utils--',
			response.status || response.status_code,
		);
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
			// throw new Error(parced.errors.message);
		}

		if (response.status === 500 || response.status === 400) {
			let parced = null;
			parced = await response.json();
			console.log('parced in 500');
			// const keys = Object.keys(parced.errors);
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
	getRootUrl: () => 'http://localhost:3000',
	getImageUrl: () => 'http://app.thecraftybarkeep.com',
	// const ROOT_URL = 'https://scratchandwin.herokuapp.com';
};
export { ApiUtils as default };
