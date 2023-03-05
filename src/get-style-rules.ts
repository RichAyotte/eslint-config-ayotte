import { Linter } from 'eslint'

type Input = {
	severity: Linter.RuleLevel
	dev_severity: Linter.RuleLevel
}

// eslint-disable-next-line max-lines-per-function
export default ({
	severity, dev_severity,
}: Input) => ({
	'@typescript-eslint/naming-convention': [
		'error',
		{
			format: ['snake_case'],
			selector: [
				'variable',
				'function',
				'parameter',
			],
		},
	],
	'@typescript-eslint/type-annotation-spacing': severity,
	'array-bracket-newline': [
		severity,
		{
			minItems: 2,
			multiline: true,
		},
	],
	'array-bracket-spacing': [
		severity,
		'never',
	],
	'array-element-newline': [
		severity,
		{
			minItems: 2,
			multiline: true,
		},
	],
	'block-spacing': severity,
	'brace-style': [
		severity,
		'stroustrup',
	],
	'capitalized-comments': [
		dev_severity,
		'always',
		{
			ignoreConsecutiveComments: true,
			ignoreInlineComments: true,
		},
	],
	'comma-dangle': [
		severity,
		'always-multiline',
	],
	'comma-spacing': severity,
	'comma-style': [
		severity,
		'last',
	],
	'computed-property-spacing': severity,
	'consistent-this': [
		severity,
		'that',
	],
	'eol-last': severity,
	'func-call-spacing': severity,
	'func-name-matching': severity,
	'func-names': [
		severity,
		'as-needed',
	],
	'func-style': [
		severity,
		'expression',
	],
	'id-blacklist': [
		severity,
		'callback',
	],
	'id-length': 'off',
	'id-match': 'off',
	indent: [
		severity,
		'tab',
		{ MemberExpression: 0 },
	],
	'jsx-quotes': severity,
	'key-spacing': severity,
	'keyword-spacing': severity,
	'line-comment-position': severity,
	'linebreak-style': [
		severity,
		'unix',
	],
	'lines-around-comment': [
		severity,
		{
			afterBlockComment: false,
			afterLineComment: false,
			allowArrayEnd: true,
			allowArrayStart: true,
			allowBlockEnd: true,
			allowBlockStart: true,
			allowClassEnd: true,
			allowClassStart: true,
			allowObjectEnd: true,
			allowObjectStart: true,
			beforeBlockComment: true,
			beforeLineComment: false,
		},
	],
	'lines-around-directive': severity,
	'max-classes-per-file': [
		severity,
		1,
	],
	'max-depth': [
		severity,
		3,
	],
	'max-len': [
		severity,
		{
			code: 100,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		},
	],
	'max-lines': [
		severity,
		{
			max: 300,
			skipBlankLines: true,
			skipComments: true,
		},
	],
	'max-lines-per-function': [
		severity,
		{
			max: 150,
			skipBlankLines: true,
			skipComments: true,
		},
	],
	'max-nested-callbacks': [
		severity,
		3,
	],
	'max-params': [
		severity,
		3,
	],
	'max-statements': [
		severity,
		30,
	],
	'max-statements-per-line': [
		severity,
		{ max: 1 },
	],
	'multiline-ternary': 'off',
	'new-cap': severity,
	'new-parens': severity,
	'newline-after-var': 'off',
	'newline-before-return': 'off',
	'newline-per-chained-call': [
		severity,
		{ ignoreChainWithDepth: 2 },
	],
	'no-array-constructor': severity,
	'no-bitwise': severity,
	'no-continue': 'off',
	'no-inline-comments': 'off',
	'no-lonely-if': severity,
	'no-mixed-operators': [
		severity,
		{ allowSamePrecedence: true },
	],
	'no-multi-assign': severity,
	'no-multiple-empty-lines': severity,
	'no-negated-condition': severity,
	'no-nested-ternary': severity,
	'no-new-object': severity,
	'no-plusplus': [
		severity,
		{ allowForLoopAfterthoughts: false },
	],
	'no-restricted-syntax': 'off',
	'no-tabs': 'off',
	'no-ternary': 'off',
	'no-trailing-spaces': severity,
	'no-underscore-dangle': [
		severity,
		{ allowAfterThis: true },
	],
	'no-unneeded-ternary': severity,
	'no-whitespace-before-property': severity,
	'nonblock-statement-body-position': 'off',
	'object-curly-newline': [
		severity,
		// 'never'
		{
			consistent: true,
			minProperties: 2,
			multiline: true,
		},
	],
	'object-curly-spacing': [
		severity,
		'always',
		{
			arraysInObjects: false,
			objectsInObjects: false,
		},
	],
	'object-property-newline': severity,
	'one-var': [
		severity,
		'never',
	],
	'one-var-declaration-per-line': 'off',
	'operator-assignment': severity,
	'operator-linebreak': [
		severity,
		'before',
	],
	'padded-blocks': [
		severity,
		'never',
	],
	'quote-props': [
		severity,
		'as-needed',
	],
	quotes: [
		severity,
		'single',
		{ allowTemplateLiterals: true },
	],
	'require-jsdoc': severity,
	semi: [
		severity,
		'never',
	],
	'semi-spacing': 'off',
	'sort-keys': [
		severity,
		'asc',
		{
			caseSensitive: false,
			natural: true,
		},
	],
	'sort-vars': [
		severity,
		{ ignoreCase: true },
	],
	'space-before-blocks': [
		severity,
		'always',
	],
	'space-before-function-paren': [
		severity,
		{
			anonymous: 'never',
			asyncArrow: 'always',
			named: 'never',
		},
	],
	'space-in-parens': [
		severity,
		'never',
	],
	'space-infix-ops': severity,
	'space-unary-ops': severity,
	'spaced-comment': [
		severity,
		'always',
	],
	'template-tag-spacing': [
		severity,
		'never',
	],
	'unicode-bom': severity,
	'wrap-regex': severity,
})
