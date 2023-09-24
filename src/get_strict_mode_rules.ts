import type { Input, Output } from './get_rules.js'

export default function get_strict_mode_rules({ severity }: Input): Output {
	return {
		strict: [
			severity,
			'safe',
		],
	}
}
