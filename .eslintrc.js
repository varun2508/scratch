module.exports = {
	root: true,
	extends: '@dooboo/eslint-config',

	rules: {
		'jsx-quotes': ['error', 'prefer-single'],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'sort-imports': 0,
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
	},
};
