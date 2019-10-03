import NavigationService from '../components/navigation/NavigationService';
import ApiUtils from './api-utils';
import { AsyncStorage } from 'react-native';

export const login = async (
	body: object,
	// signal?: AbortController['signal'],
): Promise<Response> => {
	const fetchOption: RequestInit = {
		// signal,
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(body),
	};

	try {
		const URL = `${ApiUtils.getRootUrl()}/users/login`;
		const res: Response = await fetch(`${URL}`, fetchOption);
		await ApiUtils.checkStatus(res, fetchOption);
		const user = await res.json();
		console.log('----------ress on login', res, 'user', user);
		AsyncStorage.setItem('token', user.token);
		return res;
	} catch (err) {
		console.log('----------error on login');
		throw new Error(err);
	}
};

export const register = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(body),
	};

	try {
		console.log('----fetchOption on register------', fetchOption);
		const URL = `${ApiUtils.getRootUrl()}/users`;
		const res: Response = await fetch(`${URL}`, fetchOption);
		await ApiUtils.checkStatus(res, fetchOption);
		const user = await res.json();
		console.log('----------ress on register', res, 'user', user);
		AsyncStorage.setItem('token', user.token);
		return user;
	} catch (err) {
		console.log('----------error on register');
		throw new Error(err);
	}
};

export const forgotPassword = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(body),
	};

	try {
		const res: Response = await fetch(
			`${ROOT_URL}/users/forgotPassword`,
			fetchOption,
		);
		const parced = await res.json();
		console.log('----------ress on forgot', 'parced', parced);

		return res;
	} catch (err) {
		console.log('----------error on forgot');
		throw new Error(err);
	}
};

export const logout = async (
	body: object,
	// signal?: AbortController['signal'],
) => {
	const fetchOption: RequestInit = {
		// signal,
		method: 'POST',
		headers: new Headers({
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(body),
	};

	try {
		// const res: Response = await fetch(`${ROOT_URL}/users/logout`, fetchOption);
		// const user = await res.json();
		console.log('----------calling logout');
		await AsyncStorage.removeItem('token');
		NavigationService.navigate('LoginScreen', {});
	} catch (err) {
		console.log('----------error on login');
		throw new Error(err);
	}
};

///////

// const registration = flow(function* registration(regData) {
// 	try {
// 		console.log('registration success in auth');
// 		const user = yield api.post('/users', regData);
// 		self.user = user;
// 		AsyncStorage.setItem('token', user);
// 		goHome();
// 	} catch (error) {
// 		console.log('error during register api call', error);
// 	}
// });

// const getCurrentUser = flow(function* getCurrentUser() {
// 	try {
// 		const token = yield AsyncStorage.getItem('token');

// 		const user = yield api.get('/users/me', {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		});
// 		self.user = user;
// 	} catch (error) {
// 		console.log('error on get current user', error);
// 	}
// });
