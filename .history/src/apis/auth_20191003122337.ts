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

	const URL = `${ApiUtils.getRootUrl()}/users/login`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			let user = await response.json();
			console.log('----------ress on login', response, 'user', user);

			await AsyncStorage.setItem('scratchToken', user.token);
			NavigationService.navigate('StatusScreen', {});
			return response;
		})
		.catch(async (err) => {
			let parsed = null;
			parsed = await err.json();
			console.log('----------error on login');
			return new Error(err);
		});
};

export const register = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify(body),
	};

	try {
		const URL = `${ApiUtils.getRootUrl()}/users`;
		const res: Response = await fetch(URL, fetchOption);
		await ApiUtils.checkStatus(res, fetchOption);
		const user = await res.json();
		console.log('----------ress on register', res, 'user', user);
		AsyncStorage.setItem('scratchToken', user.token);
		NavigationService.navigate('StatusScreen', {});

		return user;
	} catch (err) {
		console.log('----------error on register', err);
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
			`${ApiUtils.getRootUrl()}/users/forgotPassword`,
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
		await AsyncStorage.removeItem('scratchToken');
		NavigationService.navigate('LoginScreen', {});
	} catch (err) {
		console.log('----------error on login');
		throw new Error(err);
	}
};

export const getCurrentUser = async (body: object): Promise<Response> => {
	const token = await AsyncStorage.getItem('scratchToken');
	const fetchOption: RequestInit = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		}),
	};

	const URL = `${ApiUtils.getRootUrl()}/users/me`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			let user = await response.json();
			console.log('----------ress on getMyUser', response, 'user', user);

			return user;
		})
		.catch(async (err) => {
			let parsed = null;
			parsed = await err.json();
			console.log('----------error on login');
			return new Error(err);
		});
};
