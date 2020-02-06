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
			console.log("----------error on login");
			return new Error("Error on update tockens");
		});
};

export const getMyHistory = async (userId): Promise<Response> => {
	console.log("-----userId in api-----", userId);
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
			console.log("----------myHistory", stats);
			return stats;
		})
		.catch(() => {
			console.log("----------error on login");
			return new Error("Error on update tockens");
		});
};
