import type { Input, Output } from './get_rules.js'

export default function get_promise_rules({ severity }: Input): Output {
	return {
		'promise/always-return': 'off',
		'promise/avoid-new': 'off',
		'promise/catch-or-return': severity,
		'promise/no-callback-in-promise': severity,
		'promise/no-native': 'off',
		'promise/no-nesting': 'warn',
		'promise/no-promise-in-callback': severity,
		'promise/no-return-wrap': severity,
		'promise/param-names': severity,
	}
}
