module.exports = {
	presets: [
		"module:metro-react-native-babel-preset",
		"@babel/preset-typescript",
	],
	sourceMaps: "inline",
	plugins: [
		[
			"@babel/plugin-proposal-decorators",
			{
				legacy: true,
			},
		],
		[
			"@babel/plugin-transform-runtime",
			{
				helpers: true,
				regenerator: false,
			},
		],
		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					apis: "./src/components/apis",
					screen: "./src/screen",
					shared: "./src/components/shared",
					assets: "./src/assets",
					providers: "./src/providers",
					navigation: "./src/components/navigation",
					icons: "./src/assets/icons",
					image: "./src/assets/image",
				},
			},
		],
		"@babel/proposal-object-rest-spread",
	],
};
