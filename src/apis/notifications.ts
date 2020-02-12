import ApiUtils from "./api-utils";

export const getNotifications = async (id: string): Promise<Response> => {
	const fetchOption: RequestInit = {
		method: "POST",
		headers: new Headers({
			"Content-Type": "application/json",
		}),
		body: { id },
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
			return notification;
		})
		.catch((err) => {
			console.log("----------error on read notifications", err);
			return new Error("Error on read notifications");
		});
};
