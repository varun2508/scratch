import React, { useReducer } from "react";
import createCtx from "../utils/createCtx";
import { User, Notifications } from "../types";

interface Context {
	store: State;
	setUser: (user: User) => void;
	setNotifications: (notifications: Notifications) => void;
	getMe: (user: User) => void;
	resetUser: () => void;
}
const [useCtx, Provider] = createCtx<Context>();

type dispatchType = "reset-user" | "set-user" | "get-me" | "set-notifications";

export interface State {
	user: User;
	notifications: Notifications;
}

const initialState: State = {
	user: {
		firstName: "",
		lastName: "",
		email: "",
		birthDate: "",
		tockens: 0,
		plan: "",
		id: "",
	},
	notifications: { data: [] },
};

interface Action {
	type: dispatchType;
	payload: State;
}

interface Props {
	children?: React.ReactElement;
}

type Reducer = (store: State, action: Action) => State;

const getMe = (dispatch: React.Dispatch<Action>) => (user: User): void => {
	dispatch({
		type: "get-me",
		payload: { user },
	});
};

const setNotifications = (dispatch: React.Dispatch<Action>) => (
	notifications: Notifications
): void => {
	console.log("----------provider--seting notifications");
	dispatch({
		type: "set-notifications",
		payload: { notifications },
	});
};

const setUser = (dispatch: React.Dispatch<Action>) => (user: User): void => {
	dispatch({
		type: "set-user",
		payload: { user },
	});
};

const resetUser = (dispatch: React.Dispatch<Action>) => (): void => {
	dispatch({
		type: "reset-user",
		payload: initialState,
	});
};

const reducer: Reducer = (store = initialState, action) => {
	switch (action.type) {
		case "reset-user":
		case "set-user":
			return { ...store, user: action.payload.user };
		case "get-me":
			return { ...store, user: action.payload.user };
		case "set-notifications":
			return { ...store, notifications: action.payload.notifications };
		default:
			return store;
	}
};

function AppProvider(props: Props): React.ReactElement {
	const [store, dispatch] = useReducer<Reducer>(reducer, initialState);

	const actions = {
		getMe: getMe(dispatch),
		setUser: setUser(dispatch),
		resetUser: resetUser(dispatch),
		setNotifications: setNotifications(dispatch),
	};

	return <Provider value={{ store, ...actions }}>{props.children}</Provider>;
}

export { useCtx as useAppContext, AppProvider };
