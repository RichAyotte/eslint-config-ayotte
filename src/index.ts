import {Linter} from 'eslint'
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


const config: Linter.Config = {
	env: {
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	extends: extensions,
	overrides: [{
		files: ['*.js', '*.cjs', '*.ts', '*.mjs', '*.tsx'],
	}],
	plugins: ['import', 'promise', '@typescript-eslint'],
	rules,
	settings: {
		'import/resolver': {
			typescript: true,
		},
	},
}

module.exports = config
