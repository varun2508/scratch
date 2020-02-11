import ApiUtils from "./api-utils";

export const getNotifications = async (body: object): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: { id: "5e40718211418d1e7c536a4d" },
	};
	console.log("----------gettinhg notificationssssss-------");
	const URL = `${ApiUtils.getRootUrl()}/Notifications/getNotificationsForUser`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const notifications = await response.json();
			return notifications;
		})
		.catch(() => {
			console.log("----------error get notifications");
			return new Error("Error on get notifications");
		});
};

export const readNotification = async (body: {
	id: string;
	userId: string;
	data: object;
}): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: JSON.stringify(body),
	};
	const URL = `${ApiUtils.getRootUrl()}/Notifications/setNotificationAsRead`;
	return fetch(URL, fetchOption)
		.then((response) => ApiUtils.checkStatus(response, fetchOption))
		.then(async (response) => {
			const notification = await response.json();
			console.log("------notification response----", notification);
			return notification;
		})
		.catch(() => {
			console.log("----------error on read notifications");
			return new Error("Error onead notifications");
		});
};
