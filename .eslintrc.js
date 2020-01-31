module.exports = {
	root: true,
	extends: "@dooboo/eslint-config",

	rules: {
		"jsx-quotes": ["error", "prefer-double"],
		quotes: [2, "double", { avoidEscape: true }],
		indent: [2, "tab"],
		"no-tabs": 0,
		"sort-imports": [
			"error",
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
				ignoreMemberSort: true,
				memberSyntaxSortOrder: ["none", "single", "all", "multiple"],
			},
		],
		"prettier/prettier": [
			"error",
			{
				singleQuote: true,
				semi: true,
				printWidth: 80,
				trailingComma: "none",
				tabWidth: 2,
				arrowParens: "avoid",
			},
		],
	},
};
