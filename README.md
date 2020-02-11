### Scratch and Win

> Specification

- [react-native](https://github.com/facebook/react-native)
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [typescript](https://github.com/Microsoft/TypeScript)
- [localization](https://github.com/stefalda/ReactNativeLocalization)
- [styled-components](https://github.com/styled-components/styled-components)
- [react-hook](https://reactjs.org/docs/hooks-intro.html)
- [prettier](https://prettier.io)

### INSTALL

```
npm install && npm run start
// or
yarn && yarn start
```

### Structures

```text
app/
├─ node_modules/
├─ src/
│  └─ apis
│  └─ assets //global styles,images and icons
│  └─ screen
│  └─ components
│     └─ navigations
│     └─ shared
│     └─ ui
│  └─ providers
│  └─ types
│  └─ utils
│  └─ App.tsx
├─ .buckconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ babel.config.js
├─ index.js
├─ jest.config.js
├─ package.json
├─ README.md
├─ STRINGS.js
├─ tsconfig.json
└─ eslintrc.js
```

### Running the project

Running the project is as simple as running

```
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

### Building android

cd android && sudo ./gradlew assembleRelease

### Vscode prettier and eslint setup

```
"eslint.enable": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
],
// prettier extension setting
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"prettier.arrowParens": "always",
"prettier.jsxSingleQuote": true
```

### Using Context Api

Whenever you add your own Context provider you can add it to `providers/` and use it inside of `providers/index.tsx`

- [Splitting provider is preferred](https://github.com/facebook/react/issues/15156#issuecomment-474590693)

```tsx
// Add providers here
const AllProviders = ({ isTest, children }: Props): React.ReactElement => {
	return (
		<AppProvider>
			<ThemeProvider initialThemeType={isTest ? ThemeType.LIGHT : undefined}>
				{children}
			</ThemeProvider>
		</AppProvider>
	);
};
```

The `AllProviders` is being used at `App.tsx` and test files easily

```tsx
// App.tsx
function App(): React.ReactElement {
	return (
		<AllProviders>
			<SwitchNavigator />
		</AllProviders>
	);
}
```

```tsx
// test files
const component = (props): React.ReactElement => {
	return (
		<AllProviders isTest>
			<Intro {...props} />
		</AllProviders>
	);
};
```

### React version

16.8.3

### React Native version

0.60

### React navigation

3
