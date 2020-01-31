import { Platform } from "react-native";
export function isIOS(): boolean {
	return Platform.OS === "ios";
}
export function isObjectEmpty(obj): boolean {
	return Object.keys(obj).length === 0;
}
