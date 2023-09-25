import type { Input, Output } from './get_rules.js'

export default function get_functional_rules({ severity }: Input): Output {
	return {
		'functional/functional-parameters': [
			severity,
			{ allowRestParameter: true },
		],
		'functional/immutable-data': 'off',
		'functional/no-let': 'off',
		'functional/no-loop-statements': 'off',
		'functional/no-promise-reject': severity,
		'functional/no-try-statements': 'off',
		'functional/prefer-immutable-types': 'off',
		'functional/type-declaration-immutability': 'off',
	}
}
