import type { Input, Output } from './get_rules.js'

export default function get_best_practices_rules({
	severity, dev_severity,
}: Input): Output {
	return {
		'accessor-pairs': severity,
		'array-callback-return': severity,
		'block-scoped-var': severity,
		'class-methods-use-this': severity,
		complexity: [
			severity,
			8,
		],
		'consistent-return': 'off',
		curly: [
			severity,
			'all',
		],
		'default-case': 'off',
		'dot-location': [
			severity,
			'property',
		],
		'dot-notation': severity,
		eqeqeq: [
			severity,
			'smart',
		],
		'guard-for-in': severity,
		'no-alert': dev_severity,
		'no-caller': severity,
		'no-console': dev_severity,
		'no-debugger': dev_severity,
		'no-div-regex': severity,
		'no-else-return': severity,
		'no-empty-function': severity,
		'no-eq-null': severity,
		'no-eval': severity,
		'no-extend-native': severity,
		'no-extra-bind': severity,
		'no-extra-label': severity,
		'no-floating-decimal': severity,
		'no-global-assign': severity,
		'no-implicit-coercion': severity,
		'no-implicit-globals': severity,
		'no-implied-eval': severity,
		'no-invalid-this': severity,
		'no-iterator': severity,
		'no-labels': severity,
		'no-lone-blocks': severity,
		'no-loop-func': severity,
		'no-magic-numbers': [
			'off',
			{ enforceConst: true },
		],
		'no-multi-spaces': severity,
		'no-multi-str': severity,
		'no-new': severity,
		'no-new-func': severity,
		'no-new-wrappers': severity,
		'no-octal-escape': severity,
		'no-param-reassign': severity,
		'no-proto': severity,
		'no-restricted-properties': severity,
		'no-return-assign': severity,
		'no-return-await': severity,
		'no-script-url': severity,
		'no-self-compare': severity,
		'no-sequences': severity,
		'no-throw-literal': severity,
		'no-unmodified-loop-condition': severity,
		'no-unused-expressions': severity,
		'no-unused-vars': severity,
		'no-useless-call': severity,
		'no-useless-concat': severity,
		'no-useless-escape': severity,
		'no-useless-return': severity,
		'no-void': severity,
		'no-warning-comments': dev_severity,
		'no-with': severity,
		'prefer-promise-reject-errors': severity,
		radix: severity,
		'require-await': 'off',
		'vars-on-top': severity,
		'wrap-iife': severity,
		yoda: severity,
	}
}
