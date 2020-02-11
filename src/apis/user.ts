import ApiUtils from "./api-utils";

export const postGameResults = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	const URL = `${ApiUtils.getRootUrl()}/postGameResults`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const user = await response.json();
			return user;
		})
		.catch(() => {
			console.log("----------error on postGameResults");
			return new Error("Error on postGameResults");
		});
};

export const updateTockens = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	const URL = `${ApiUtils.getRootUrl()}/updateTockens`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const user = await response.json();
			return user;
		})
		.catch(() => {
			console.log("----------error on update tockens");
			return new Error("Error on update tockens");
		});
};
