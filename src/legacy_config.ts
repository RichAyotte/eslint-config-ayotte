import path from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

import combine_rules from './combine_rules.js'
import extensions from './extensions.js'
import get_best_practice_rules from './get_best_practices_rules.js'
import get_error_rules from './get_error_rules.js'
import get_es6_rules from './get_es6_rules.js'
import get_node_rules from './get_node_rules.js'
import get_promise_rules from './get_promise_rules.js'
import get_strict_mode_rules from './get_strict_mode_rules.js'
import get_style_rules from './get_style_rules.js'
import get_variable_rules from './get_variable_rules.js'

import type { Linter } from 'eslint'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: dirname,
	recommendedConfig: js.configs.recommended,
	resolvePluginsRelativeTo: dirname,
})

const legacy_config: Linter.Config = {
	extends: extensions,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		project: true,
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'promise',
		'n',
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
	settings: {
		'import/resolver': {
			node: true,
			typescript: true,
		},
	},
}

export default compat.config(legacy_config)
