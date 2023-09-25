import type { Input, Output } from './get_rules.js'

export default function get_node_rules({ severity }: Input): Output {
	return {
		'callback-return': severity,
		'global-require': severity,
		'handle-callback-err': severity,
		'n/callback-return': [severity],
		'n/file-extension-in-import': 'off',
		'n/no-extraneous-import': [
			severity,
			{ allowModules: ['@eslint/js']},
		],
		'n/no-sync': [severity],
		'n/no-unpublished-import': [
			severity,
			{ allowModules: ['@eslint/eslintrc']},
		],
		'n/prefer-global/buffer': [severity],
		'n/prefer-promises/dns': [severity],
		'n/prefer-promises/fs': [severity],
		'no-mixed-requires': severity,
		'no-new-require': severity,
		'no-path-concat': severity,
		'no-process-env': 'off',
		'no-process-exit': severity,
		'no-restricted-modules': severity,
	}
}
