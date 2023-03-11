import type { Input, Output } from './get_rules'

export default function get_es6_rules(input: Input): Output {
	return {
		'arrow-body-style': [
			input.severity,
			'as-needed',
		],
		'arrow-parens': [
			input.severity,
			'as-needed',
		],
		'arrow-spacing': [
			input.severity,
			{
				after: true,
				before: true,
			},
		],
		'generator-star-spacing': [
			input.severity,
			{
				after: true,
				before: false,
			},
		],
		'import/order': [
			input.severity,
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
			},
		],
		'no-confusing-arrow': input.severity,
		'no-duplicate-imports': input.severity,
		'no-restricted-imports': 'off',
		'no-useless-computed-key': input.severity,
		'no-useless-constructor': input.severity,
		'no-useless-rename': input.severity,
		'no-var': input.severity,
		'object-shorthand': input.severity,
		'prefer-arrow-callback': input.severity,
		'prefer-const': input.severity,
		'prefer-destructuring': input.severity,
		'prefer-numeric-literals': input.severity,
		'prefer-object-spread': input.severity,
		'prefer-rest-params': input.severity,
		'prefer-spread': input.severity,
		'prefer-template': input.severity,
		'rest-spread-spacing': [
			input.severity,
			'never',
		],
		'sort-imports': 'off',
		'symbol-description': input.severity,
		'template-curly-spacing': [
			input.severity,
			'never',
		],
		'yield-star-spacing': input.severity,
	}
}
