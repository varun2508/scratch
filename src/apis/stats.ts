import ApiUtils from "./api-utils";

export const getWeelyTop = async (): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "GET",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
	};
	const URL = `${ApiUtils.getRootUrl()}/WeeklyTops`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const stats = await response.json();
			return stats;
		})
		.catch(() => {
			return new Error("getWeelyTop");
		});
};

export const getMyHistory = async (userId): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "GET",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
	};
	const URL = `${ApiUtils.getRootUrl()}/WinHistories?filter=%7B%22where%22%3A%20%7B%22userId%22%3A%22${userId}%22%7D%7D`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const stats = await response.json();
			return stats;
		})
		.catch(() => {
			console.log("----------error on getMyHistory");
			return new Error("Error on getMyHistory");
		});
};

export const getGeneralStats = async (): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "GET",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
	};
	const URL = `${ApiUtils.getRootUrl()}/GeneralStats`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const stats = await response.json();
			return stats;
		})
		.catch(() => {
			console.log("----------error generalStats");
			return new Error("Error on generalStats");
		});
};
