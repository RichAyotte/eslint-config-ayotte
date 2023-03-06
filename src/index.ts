import { Linter } from 'eslint'

import combine_rules from './combine_rules'
import extensions from './extensions'
import get_best_practice_rules from './get_best_practices_rules'
import get_error_rules from './get_error_rules'
import get_es6_rules from './get_es6_rules'
import get_node_rules from './get_node_rules'
import get_promise_rules from './get_promise_rules'
import get_strict_mode_rules from './get_strict_mode_rules'
import get_style_rules from './get_style_rules'
import get_variable_rules from './get_variable_rules'

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
	rules: [
		get_best_practice_rules,
		get_error_rules,
		get_es6_rules,
		get_node_rules,
		get_promise_rules,
		get_style_rules,
		get_variable_rules,
		get_strict_mode_rules,
	].reduce(combine_rules, {}),
	settings: { 'import/resolver': { typescript: true }},
}

module.exports = config
