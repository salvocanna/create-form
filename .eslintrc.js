module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],

	plugins: [
		'@typescript-eslint',
		'react',
		'simple-import-sort',
		'jest',
		'unused-imports',
	],

	env: {
		node: true,
		browser: true,
		jest: true,
	},

	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		project: [
			'tsconfig.json',
		],
		tsconfigRootDir: __dirname,

		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
		},
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	rules: {
		'camelcase': 'off',
		'comma-dangle': ['error', 'always-multiline'],
		'func-style': [1, 'declaration', { 'allowArrowFunctions': true }],
		'indent': 'off',
		'no-array-constructor': 'off',
		'no-confusing-arrow': 0,
		"eol-last": ["error", "always"],
		'no-invalid-this': 0,
		'no-magic-numbers': 0,
		"no-multiple-empty-lines": [1, { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
		'no-use-before-define': 0,
		'no-useless-catch': 0,
		'max-len': ['warn', {
			'ignoreUrls': true,
			'code': 120,
			'ignoreStrings': true,
			'ignoreTemplateLiterals': true,
			'ignoreTrailingComments': true
		}],
		'jsx-quotes': ['error', 'prefer-single'],
		'no-unused-vars': 'off',
		'quotes': 'off',
		'react/jsx-curly-brace-presence': ['error', 'always'],
		'react/jsx-tag-spacing': 1,
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'react/no-multi-comp': 0,
		'react/no-unsafe': [1, { 'checkAliases': true }],
		'react/prop-types': 0,
		'simple-import-sort/imports': ['error', { groups: [['^react', '^@?\\w']] }],
		'sort-imports': 0,
		'unused-imports/no-unused-imports': 'error',

		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/indent': [1, 'tab', { 'SwitchCase': 1 }],
		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/member-naming': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-parameter-properties': 'error',
		'@typescript-eslint/triple-slash-reference': [1, { 'path': 'never', 'types': 'never', 'lib': 'never' }],
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
	},
};
