import { Linter } from 'eslint'

import extensions from './extensions'
import getBestPracticeRules from './get-best-practices-rules'
import getErrorRules from './get-error-rules'
import getEs6Rules from './get-es6-rules'
import getNodeRules from './get-node-rules'
import getPromiseRules from './get-promise-rules'
import getStrictModeRules from './get-strict-mode-rules'
import getStyleRules from './get-style-rules'
import getVariableRules from './get-variable-rules'

const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn'
const dev_severity = process.env.NODE_ENV === 'production' ? 'error' : 'off'

const rules = [
	getBestPracticeRules,
	getErrorRules,
	getEs6Rules,
	getNodeRules,
	getPromiseRules,
	getStyleRules,
	getVariableRules,
	getStrictModeRules,
].reduce((accum, get_rules) => ({
	...accum,
	...get_rules({
		dev_severity,
		severity,
	}),
}), {})


const config: Linter.Config = {
	env: {
		es6: true,
		node: true,
	},
	extends: extensions,
	overrides: [
		{
			files: [
				'*.js',
				'*.cjs',
				'*.ts',
				'*.mjs',
				'*.tsx',
			],
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: true,
	},
	plugins: [
		'import',
		'promise',
		'@typescript-eslint',
	],
	rules,
	settings: { 'import/resolver': { typescript: true }},
}

module.exports = config
