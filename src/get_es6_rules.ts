import type { Input, Output } from './get_rules.js'

export default function get_es6_rules({ severity }: Input): Output {
	return {
		'arrow-body-style': [
			severity,
			'as-needed',
		],
		'arrow-parens': [
			severity,
			'as-needed',
		],
		'arrow-spacing': [
			severity,
			{
				after: true,
				before: true,
			},
		],
		'generator-star-spacing': [
			severity,
			{
				after: true,
				before: false,
			},
		],
		'import/order': [
			severity,
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
		'no-confusing-arrow': severity,
		'no-duplicate-imports': severity,
		'no-restricted-imports': 'off',
		'no-useless-computed-key': severity,
		'no-useless-constructor': severity,
		'no-useless-rename': severity,
		'no-var': severity,
		'object-shorthand': severity,
		'prefer-arrow-callback': severity,
		'prefer-const': severity,
		'prefer-destructuring': severity,
		'prefer-numeric-literals': severity,
		'prefer-object-spread': severity,
		'prefer-rest-params': severity,
		'prefer-spread': severity,
		'prefer-template': severity,
		'rest-spread-spacing': [
			severity,
			'never',
		],
		'sort-imports': 'off',
		'symbol-description': severity,
		'template-curly-spacing': [
			severity,
			'never',
		],
		'yield-star-spacing': severity,
	}
}
