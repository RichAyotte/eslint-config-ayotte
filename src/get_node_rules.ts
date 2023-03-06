import type {
	Input, Output,
} from './get_rules'

export default function get_node_rules({ severity }: Input): Output {
	return {
		'callback-return': severity,
		'global-require': severity,
		'handle-callback-err': severity,
		'no-mixed-requires': severity,
		'no-new-require': severity,
		'no-path-concat': severity,
		'no-process-env': 'off',
		'no-process-exit': severity,
		'no-restricted-modules': severity,
		'no-sync': severity,
	}
}
