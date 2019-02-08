/* eslint-disable max-lines */

/**
 * @overview    Ayotte style eslinting
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2017-06-01 17:16:08
 * @license     MIT
 */

'use strict'

const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn'
const devSeverity = process.env.NODE_ENV === 'production' ? 'error' : 'off'

const env = {
	es6: true
	, node: true
}

const parserOptions = {
	ecmaVersion: 2018
}

const plugins = ['import', 'promise']

const extensions = [
	'eslint:recommended'
	, 'plugin:import/errors'
	, 'plugin:import/warnings'
	, 'plugin:promise/recommended'
]

// Error rules
const errorRules = {
	'no-await-in-loop': severity
	, 'no-compare-neg-zero': severity
	, 'no-extra-parens': [severity, 'functions']
	, 'no-prototype-builtins': severity
	, 'no-template-curly-in-string': severity
	, 'no-unreachable': severity
	, 'no-unsafe-negation': severity
	, 'valid-jsdoc': severity
}

// Best Practice Rules
const bestPracticeRules = {
	'accessor-pairs': severity
	, 'array-callback-return': severity
	, 'block-scoped-var': severity
	, 'class-methods-use-this': severity
	, complexity: [severity, 8]
	, 'consistent-return': 'off'
	, curly: [severity, 'all']
	, 'default-case': 'off'
	, 'dot-location': [severity, 'property']
	, 'dot-notation': severity
	, eqeqeq: [severity, 'smart']
	, 'guard-for-in': severity
	, 'no-alert': devSeverity
	, 'no-console': devSeverity
	, 'no-debugger': devSeverity
	, 'no-caller': severity
	, 'no-div-regex': severity
	, 'no-else-return': severity
	, 'no-empty-function': severity
	, 'no-eq-null': severity
	, 'no-eval': severity
	, 'no-extend-native': severity
	, 'no-extra-bind': severity
	, 'no-extra-label': severity
	, 'no-floating-decimal': severity
	, 'no-global-assign': severity
	, 'no-implicit-coercion': severity
	, 'no-implicit-globals': severity
	, 'no-implied-eval': severity
	, 'no-invalid-this': severity
	, 'no-iterator': severity
	, 'no-labels': severity
	, 'no-lone-blocks': severity
	, 'no-loop-func': severity
	, 'no-magic-numbers': ['off', {enforceConst: true}]
	, 'no-multi-spaces': severity
	, 'no-multi-str': severity
	, 'no-new': severity
	, 'no-new-func': severity
	, 'no-new-wrappers': severity
	, 'no-octal-escape': severity
	, 'no-param-reassign': severity
	, 'no-proto': severity
	, 'no-restricted-properties': severity
	, 'no-return-assign': severity
	, 'no-return-await': severity
	, 'no-script-url': severity
	, 'no-self-compare': severity
	, 'no-sequences': severity
	, 'no-throw-literal': severity
	, 'no-unmodified-loop-condition': severity
	, 'no-unused-expressions': severity
	, 'no-unused-vars': severity
	, 'no-useless-call': severity
	, 'no-useless-concat': severity
	, 'no-useless-escape': severity
	, 'no-useless-return': severity
	, 'no-void': severity
	, 'no-warning-comments': devSeverity
	, 'no-with': severity
	, 'prefer-promise-reject-errors': severity
	, radix: severity
	, 'require-await': 'off'
	, 'vars-on-top': severity
	, 'wrap-iife': severity
	, yoda: severity
}

// Strict Mode Rules
const strictModeRules = {
	strict: [severity, 'safe']
}

// Variables Rules
const variableRules = {
	'init-declarations': severity
	, 'no-catch-shadow': severity
	, 'no-label-var': severity
	, 'no-restricted-globals': severity
	, 'no-shadow': severity
	, 'no-shadow-restricted-names': severity
	, 'no-undef-init': severity
	, 'no-undefined': severity
	, 'no-use-before-define': severity
}

// Node.js and CommonJS
const nodeRules = {
	'callback-return': severity
	, 'global-require': severity
	, 'handle-callback-err': severity
	, 'no-mixed-requires': severity
	, 'no-new-require': severity
	, 'no-path-concat': severity
	, 'no-process-env': 'off'
	, 'no-process-exit': severity
	, 'no-restricted-modules': severity
	, 'no-sync': severity
}

// Stylistic Issues
const styleRules = {
	'array-bracket-newline': [
		severity
		, 'consistent'
	]
	, 'array-bracket-spacing': [severity, 'never']
	, 'array-element-newline': [
		severity
		, 'consistent'
	]
	, 'block-spacing': severity
	, 'brace-style': [severity, 'stroustrup']
	, camelcase: severity
	, 'capitalized-comments': [
		devSeverity
		, 'always'
		, {
			ignoreConsecutiveComments: true
			, ignoreInlineComments: true
		}
	]
	, 'comma-dangle': [severity, 'never']
	, 'comma-spacing': severity
	, 'comma-style': [severity, 'first']
	, 'computed-property-spacing': severity
	, 'consistent-this': [severity, 'that']
	, 'eol-last': severity
	, 'func-call-spacing': severity
	, 'func-name-matching': severity
	, 'func-names': [severity, 'as-needed']
	, 'func-style': [severity, 'expression']
	, 'id-blacklist': [severity, 'callback']
	, 'id-length': 'off'
	, 'id-match': 'off'
	, indent: [
		severity
		, 'tab'
		, {MemberExpression: 0}
	]
	, 'jsx-quotes': severity
	, 'key-spacing': severity
	, 'keyword-spacing': severity
	, 'line-comment-position': severity
	, 'linebreak-style': [severity, 'unix']
	, 'lines-around-comment': [
		severity
		, {
			beforeBlockComment: true
			, afterBlockComment: false
			, beforeLineComment: false
			, afterLineComment: false
			, allowBlockStart: true
			, allowBlockEnd: true
			, allowObjectStart: true
			, allowObjectEnd: true
			, allowArrayStart: true
			, allowArrayEnd: true
			, allowClassStart: true
			, allowClassEnd: true
		}
	]
	, 'lines-around-directive': severity
	, 'max-depth': [severity, 3]
	, 'max-len': [
		severity
		, {
			code: 100
			, ignoreRegExpLiterals: true
			, ignoreStrings: true
			, ignoreTemplateLiterals: true
			, ignoreUrls: true
		}
	]
	, 'max-lines': [severity, {
		max: 300
		, skipBlankLines: true
		, skipComments: true
	}]
	, 'max-nested-callbacks': [severity, 3]
	, 'max-params': [severity, 3]
	, 'max-statements': [severity, 30]
	, 'max-statements-per-line': [severity, {max: 1}]
	, 'max-classes-per-file': [severity, 1]
	, 'max-lines-per-function': [severity, {
		max: 100
		, skipBlankLines: true
		, skipComments: true
	}]
	, 'multiline-ternary': 'off'
	, 'new-cap': severity
	, 'new-parens': severity
	, 'newline-after-var': 'off'
	, 'newline-before-return': 'off'
	, 'newline-per-chained-call': [severity, {ignoreChainWithDepth: 2}]
	, 'no-array-constructor': severity
	, 'no-bitwise': severity
	, 'no-continue': 'off'
	, 'no-inline-comments': 'off'
	, 'no-lonely-if': severity
	, 'no-mixed-operators': [severity, {allowSamePrecedence: true}]
	, 'no-multi-assign': severity
	, 'no-multiple-empty-lines': severity
	, 'no-negated-condition': severity
	, 'no-nested-ternary': severity
	, 'no-new-object': severity
	, 'no-plusplus': [severity, {allowForLoopAfterthoughts: false}]
	, 'no-restricted-syntax': 'off'
	, 'no-tabs': 'off'
	, 'no-ternary': 'off'
	, 'no-trailing-spaces': severity
	, 'no-underscore-dangle': [severity, {allowAfterThis: true}]
	, 'no-unneeded-ternary': severity
	, 'no-whitespace-before-property': severity
	, 'nonblock-statement-body-position': 'off'
	, 'object-curly-newline': [
		severity
		, {
			multiline: true
			, consistent: true
		}
	]
	, 'object-curly-spacing': severity
	, 'object-property-newline': severity
	, 'one-var': [severity, 'never']
	, 'one-var-declaration-per-line': 'off'
	, 'operator-assignment': severity
	, 'operator-linebreak': [severity, 'before']
	, 'padded-blocks': [severity, 'never']
	, 'quote-props': [severity, 'as-needed']
	, quotes: [
		severity
		, 'single'
		, {allowTemplateLiterals: true}
	]
	, 'require-jsdoc': severity
	, semi: [severity, 'never']
	, 'semi-spacing': 'off'
	, 'sort-keys': 'off'
	, 'sort-vars': 'off'
	, 'space-before-blocks': [severity, 'always']
	, 'space-before-function-paren': [
		severity
		, {
			named: 'never'
			, anonymous: 'never'
			, asyncArrow: 'always'
		}
	]
	, 'space-in-parens': [severity, 'never']
	, 'space-infix-ops': severity
	, 'space-unary-ops': severity
	, 'spaced-comment': [severity, 'always']
	, 'template-tag-spacing': [severity, 'never']
	, 'unicode-bom': severity
	, 'wrap-regex': severity
}

// ECMAScript 6
const es6Rules = {
	'arrow-body-style': [severity, 'as-needed']
	, 'arrow-parens': [severity, 'as-needed']
	, 'arrow-spacing': [
		severity
		, {
			before: true
			, after: true
		}
	]
	, 'generator-star-spacing': [
		severity
		, {
			before: false
			, after: true
		}
	]
	, 'import/order': [
		severity
		, {
			groups: [
				'builtin'
				, 'external'
				, 'internal'
				, 'parent'
				, 'sibling'
				, 'index'
			]
		}
	]
	, 'no-confusing-arrow': severity
	, 'no-duplicate-imports': severity
	, 'no-restricted-imports': 'off'
	, 'no-useless-computed-key': severity
	, 'no-useless-constructor': severity
	, 'no-useless-rename': severity
	, 'no-var': severity
	, 'object-shorthand': severity
	, 'prefer-arrow-callback': severity
	, 'prefer-const': severity
	, 'prefer-destructuring': severity
	, 'prefer-numeric-literals': severity
	, 'prefer-object-spread': severity
	, 'prefer-rest-params': severity
	, 'prefer-spread': severity
	, 'prefer-template': severity
	, 'rest-spread-spacing': [severity, 'never']
	, 'sort-imports': 'off'
	, 'symbol-description': severity
	, 'template-curly-spacing': [severity, 'never']
	, 'yield-star-spacing': severity
}

// Promises
// @see https://github.com/xjamundx/eslint-plugin-promise
const promiseRules = {
	'promise/always-return': 'off'
	, 'promise/avoid-new': 'off'
	, 'promise/catch-or-return': severity
	, 'promise/no-callback-in-promise': severity
	, 'promise/no-native': 'off'
	, 'promise/no-nesting': 'warn'
	, 'promise/no-promise-in-callback': severity
	, 'promise/no-return-wrap': severity
	, 'promise/param-names': severity
}

module.exports = {
	env
	, extends: extensions
	, parserOptions
	, plugins
	, rules: Object.assign(
		bestPracticeRules
		, errorRules
		, es6Rules
		, nodeRules
		, promiseRules
		, strictModeRules
		, styleRules
		, variableRules
	)
}
