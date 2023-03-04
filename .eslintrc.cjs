/* eslint-disable @typescript-eslint/no-var-requires */
const extensions = require('./extensions.cjs')
const getBestPracticeRules = require('./get-best-practices-rules.cjs')
const getErrorRules = require('./get-error-rules.cjs')
const getEs6Rules = require('./get-es6-rules.cjs')
const getNodeRules = require('./get-node-rules.cjs')
const getPromiseRules = require('./get-promise-rules.cjs')
const getStrictModeRules = require('./get-strict-mode-rules.cjs')
const getStyleRules = require('./get-style-rules.cjs')
const getVariableRules = require('./get-variable-rules.cjs')

const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn'
const devSeverity = process.env.NODE_ENV === 'production' ? 'error' : 'off'

const rules = [getBestPracticeRules,
	getErrorRules,
	getEs6Rules,
	getNodeRules,
	getPromiseRules,
	getStyleRules,
	getVariableRules,
	getStrictModeRules].reduce((accum, getRules) => ({
	...accum,
	...getRules({
		severity,
		devSeverity,
	}),
}), {})

module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: extensions,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['import', 'promise', '@typescript-eslint'],
	rules,
}
