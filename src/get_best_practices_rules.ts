import type { Input, Output } from './get_rules'

export default function get_best_practices_rules(input: Input): Output {
	return {
		'accessor-pairs': input.severity,
		'array-callback-return': input.severity,
		'block-scoped-var': input.severity,
		'class-methods-use-this': input.severity,
		complexity: [
			input.severity,
			8,
		],
		'consistent-return': 'off',
		curly: [
			input.severity,
			'all',
		],
		'default-case': 'off',
		'dot-location': [
			input.severity,
			'property',
		],
		'dot-notation': input.severity,
		eqeqeq: [
			input.severity,
			'smart',
		],
		'guard-for-in': input.severity,
		'no-alert': input.dev_severity,
		'no-caller': input.severity,
		'no-console': input.dev_severity,
		'no-debugger': input.dev_severity,
		'no-div-regex': input.severity,
		'no-else-return': input.severity,
		'no-empty-function': input.severity,
		'no-eq-null': input.severity,
		'no-eval': input.severity,
		'no-extend-native': input.severity,
		'no-extra-bind': input.severity,
		'no-extra-label': input.severity,
		'no-floating-decimal': input.severity,
		'no-global-assign': input.severity,
		'no-implicit-coercion': input.severity,
		'no-implicit-globals': input.severity,
		'no-implied-eval': input.severity,
		'no-invalid-this': input.severity,
		'no-iterator': input.severity,
		'no-labels': input.severity,
		'no-lone-blocks': input.severity,
		'no-loop-func': input.severity,
		'no-magic-numbers': [
			'off',
			{ enforceConst: true },
		],
		'no-multi-spaces': input.severity,
		'no-multi-str': input.severity,
		'no-new': input.severity,
		'no-new-func': input.severity,
		'no-new-wrappers': input.severity,
		'no-octal-escape': input.severity,
		'no-param-reassign': input.severity,
		'no-proto': input.severity,
		'no-restricted-properties': input.severity,
		'no-return-assign': input.severity,
		'no-return-await': input.severity,
		'no-script-url': input.severity,
		'no-self-compare': input.severity,
		'no-sequences': input.severity,
		'no-throw-literal': input.severity,
		'no-unmodified-loop-condition': input.severity,
		'no-unused-expressions': input.severity,
		'no-unused-vars': input.severity,
		'no-useless-call': input.severity,
		'no-useless-concat': input.severity,
		'no-useless-escape': input.severity,
		'no-useless-return': input.severity,
		'no-void': input.severity,
		'no-warning-comments': input.dev_severity,
		'no-with': input.severity,
		'prefer-promise-reject-errors': input.severity,
		radix: input.severity,
		'require-await': 'off',
		'vars-on-top': input.severity,
		'wrap-iife': input.severity,
		yoda: input.severity,
	}
}
