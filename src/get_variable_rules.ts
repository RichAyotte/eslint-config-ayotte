import type { Input, Output } from './get_rules.js'

export default function get_variable_rules(input: Input): Output {
	return {
		'init-declarations': input.severity,
		'no-catch-shadow': input.severity,
		'no-label-var': input.severity,
		'no-restricted-globals': input.severity,
		'no-shadow': input.severity,
		'no-shadow-restricted-names': input.severity,
		'no-undef-init': input.severity,
		'no-undefined': input.severity,
		'no-use-before-define': input.severity,
	}
}
