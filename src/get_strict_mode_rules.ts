import type { Input, Output } from './get_rules'

export default function get_strict_mode_rules(input: Input): Output {
	return {
		strict: [
			input.severity,
			'safe',
		],
	}
}
