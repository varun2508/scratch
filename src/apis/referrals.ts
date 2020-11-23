import ApiUtils from "./api-utils";

export const postReferralCode = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	console.log("----------post code-------", fetchOption.body);
	const URL = `${ApiUtils.getRootUrl()}/postFriendReferralCode`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const user = await response.json();
			return user;
		})
		.catch((err) => {
			console.log("----------error  on reffral code", err);
			return new Error("Error on reffral code");
		});
};

export const addEarningToBalance = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	console.log("----------post addEarningToBalance-------", fetchOption.body);
	const URL = `${ApiUtils.getRootUrl()}/addEarningToBalance`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const user = await response.json();
			return user;
		})
		.catch((err) => {
			console.log("----------error  on addEarningToBalance", err);
			return new Error("Error on addEarningToBalance");
		});
};
