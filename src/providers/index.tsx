import { AppProvider } from "./AppProvider";
import React from "react";
// import { ThemeProvider } from './ThemeProvider';
import { ThemeType } from "../theme";

interface Props {
	isTest?: boolean;
	children?: React.ReactElement;
}

// Add providers here
const AllProviders = ({ isTest, children }: Props): React.ReactElement => {
	return <AppProvider>{children}</AppProvider>;
};

export default AllProviders;

// /* <ThemeProvider initialThemeType={isTest ? ThemeType.LIGHT : undefined}> */

// /* </ThemeProvider> */
