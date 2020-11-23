import { Alert, AsyncStorage } from "react-native";
import NavigationService from "../components/navigation/NavigationService";

const ApiUtils = {
	/* eslint-disable */
	checkStatus: async (response, options) => {
		console.log("-response status in utils--", options);
		// let resp = await response.json();
		// console.log('------response----', resp);

		// ---------401-----

		if (response.status === 401) {
			let parced = await response.json();
			console.log("Unauthenticated!!");
			if (parced.error) {
				AsyncStorage.removeItem("scratchToken", () => {
					NavigationService.navigate("LoginScreen", {});
				});
				Alert.alert("Error", parced.error.message);
				throw new Error(parced.error.message);
			}
			if (parced.message) {
				Alert.alert("Error", parced.message);
			}
			throw new Error(parced.message);
		}

		// ---------404-----
		if (response.status === 404) {
			let parced = await response.json();
			console.log("parced in 404", parced.error.message);
			Alert.alert(parced.error.message);
			throw new Error(parced.error.message);
		}

		// ---------500-----
		if (response.status === 500 || response.status === 400) {
			let parced = await response.json();
			console.log("parced in 500", parced.error.message);
			Alert.alert(parced.error.message);
			throw new Error(parced.error.message);
		}

		// ---------422-----

		if (response.status === 422) {
			let parced = await response.json();
			console.log("parced in 422", parced);
			console.log("parced in 422 - details", parced.error.details);
			let errors = [];
			if (parced.error && parced.error.details) {
				parced.error.details.forEach((element) => {
					errors.push(`\n - ${element.path.slice(1)} ${element.message}`);
				});
			}
			Alert.alert("Error", errors.toString());
		}

		// ---------ok-----

		if (response.ok) {
			console.log("response ok----------");
			return response;
		} else {
			let parced = await response.error.json();
			console.log("parced in error(not 400 or 500)", parced);
			// Alert.alert('Error', parced);
			throw new Error(parced);
		}
	},
	/* eslint-enable */
	// for localhost
	// getRootUrl: () => "http://10.0.2.2:3000/api",
	getRootUrl: (): string => "https://scratchandwin.herokuapp.com/api",

	getImageUrl: (): string => "http://172.31.119.57:3000/api",
};
export { ApiUtils as default };
