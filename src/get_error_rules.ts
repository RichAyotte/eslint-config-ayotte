import type { Input, Output } from './get_rules'

export default function get_error_rules(input: Input): Output {
	return {
		'no-await-in-loop': input.severity,
		'no-compare-neg-zero': input.severity,
		'no-extra-parens': [
			input.severity,
			'functions',
		],
		'no-prototype-builtins': input.severity,
		'no-template-curly-in-string': input.severity,
		'no-unreachable': input.severity,
		'no-unsafe-negation': input.severity,
		'valid-jsdoc': input.severity,
	}
}
