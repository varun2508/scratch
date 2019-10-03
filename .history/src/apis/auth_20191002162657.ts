const ROOT_URL = 'https://scratchandwin.herokuapp.com';

// const ROOT_URL = 'http://localhost:3000';
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
		const res: Response = await fetch(`${ROOT_URL}/users/login`, fetchOption);
		const user = await res.json();
		console.log('----------ress on login', res, 'user', user);
		AsyncStorage.setItem('token', user.token);
		return res;
	} catch (err) {
		console.log('----------error on login');
		throw new Error(err);
	}
};

export const register = async (
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
		const res: Response = await fetch(`${ROOT_URL}/users/login`, fetchOption);
		const user = await res.json();
		console.log('----------ress on login', res, 'user', user);
		AsyncStorage.setItem('token', user.token);
		return res;
	} catch (err) {
		console.log('----------error on login');
		throw new Error(err);
	}
};

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
		const res: Response = await fetch(`${ROOT_URL}/users/login`, fetchOption);
		const user = await res.json();
		console.log('----------ress on login', res, 'user', user);
		AsyncStorage.setItem('token', user.token);
		return res;
	} catch (err) {
		console.log('----------error on login');
		throw new Error(err);
	}
};
