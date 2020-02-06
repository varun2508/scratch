import NavigationService from "../components/navigation/NavigationService";
import ApiUtils from "./api-utils";
import { AsyncStorage, Alert } from "react-native";
import { User } from "../types";

export const login = async (
	body: object
	// signal?: AbortController['signal'],
): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	const URL = `${ApiUtils.getRootUrl()}/Clients/login`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const user = await response.json();
			await AsyncStorage.setItem("scratchToken", user.token);
			await AsyncStorage.setItem("scratchUserId", user.userId);
			return user;
		})
		.catch(async (err) => {
			console.log("----------error on login", err);
			return new Error(err);
		});
};

export const register = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};

	try {
		const URL = `${ApiUtils.getRootUrl()}/Clients`;
		const res: Response = await fetch(URL, fetchOption);
		await ApiUtils.checkStatus(res, fetchOption);
		const user = await res.json();
		console.log("----------ress on register", res, "user", user);
		Alert.alert("The user have been added successfully created. Please login!");
		NavigationService.navigate("LoginScreen", {});

		return user;
	} catch (err) {
		console.log("----------error on register", err);
		throw new Error(err);
	}
};

export const forgotPassword = async (body: object): Promise<void> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			Accept: "application/json",
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	try {
		const res: Response = await fetch(
			`${ApiUtils.getRootUrl()}/Clients/reset`,
			fetchOption
		);
		await ApiUtils.checkStatus(res, fetchOption);
		Alert.alert("We've sent you an email with a link to reset your password");
		NavigationService.navigate("LoginScreen", {});
	} catch (err) {
		console.log("----------error on forgot", err);
	}
};

export const updatePassword = async (body: object): Promise<void> => {
	const token = await AsyncStorage.getItem("scratchToken");
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `${token}`,
		}),
		body: JSON.stringify(body),
	};
	try {
		const res: Response = await fetch(
			`${ApiUtils.getRootUrl()}/Clients/change-password`,
			fetchOption
		);
		console.log("---------res on resset-", fetchOption);
		await ApiUtils.checkStatus(res, fetchOption);
		Alert.alert("Password was reset!");
	} catch (err) {
		console.log("----------error on reset", err);
	}
};

export const logout = async (body: object): Promise<void> => {
	const token = await AsyncStorage.getItem("scratchToken");
	const fetchOption: RequestInit = {
		// signal,
		method: "POST",
		headers: new Headers({
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `${token}`,
		}),
		body: JSON.stringify(body),
	};

	try {
		// const res: Response = await fetch(`${ROOT_URL}/Clients/logout`, fetchOption);
		// const user = await res.json();
		console.log("----------calling logout");
		await AsyncStorage.removeItem("scratchToken");
		///// need to be deleted after Context will be set
		await AsyncStorage.removeItem("scratchUserId");
		NavigationService.navigate("LoginScreen", {});
	} catch (err) {
		console.log("----------error on login");
		throw new Error(err);
	}
};

export const getCurrentUser = async (): Promise<Response> => {
	const token = await AsyncStorage.getItem("scratchToken");
	const fetchOption: RequestInit = {
		method: "GET",
		headers: new Headers({
			Accept: "application/json",
			Authorization: `${token}`,
		}),
	};
	const URL = `${ApiUtils.getRootUrl()}/Clients/me`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const user = await response.json();
			// console.log('----------ress on getMyUser', response, 'user', user);

			return user;
		})
		.catch(async (err) => {
			// let parsed = null;
			// parsed = await err.json();
			console.log("----------error on getCurrentUser");
			return new Error(err);
		});
};

export const updateUser = async (body: object): Promise<Response> => {
	const token = await AsyncStorage.getItem("scratchToken");

	const fetchOption: RequestInit = {
		method: "PUT",
		headers: new Headers({
			"Content-Type": "application/json",
			Authorization: `${token}`,
		}),
		body: JSON.stringify(body),
	};

	try {
		const URL = `${ApiUtils.getRootUrl()}/Clients/${body.userId}`;
		const res: Response = await fetch(URL, fetchOption);
		await ApiUtils.checkStatus(res, fetchOption);
		// const user = await res.json();
		console.log("----------ress on update user", res);
		Alert.alert("User is updated!");
		return res;
	} catch (err) {
		console.log("----------error on update", err);
		throw new Error(err);
	}
};

export const getUserById = async (userId: string | null): Promise<User> => {
	const token = await AsyncStorage.getItem("scratchToken");
	const fetchOption: RequestInit = {
		method: "GET",
		headers: new Headers({
			Accept: "application/json",
			Authorization: `${token}`,
		}),
	};
	console.log("-----------------userId-------------------", userId);
	const URL = `${ApiUtils.getRootUrl()}/Clients/${userId}`;
	console.log("-----------------URL-------------------", URL);

	return fetch(URL, fetchOption)
		.then((response) => {
			console.log("------response before check api----");
			return ApiUtils.checkStatus(response, fetchOption);
		})
		.then(async (response) => {
			let user = await response.json();
			console.log("----------ress on getUserById", response, "user", user);

			return user;
		})
		.catch(async (err) => {
			console.log("----------error on getUserById", err);
			// let parsed = null;
			// parsed = await err.json();
			return new Error(err);
		});
};
