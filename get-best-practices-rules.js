module.exports = ({severity, devSeverity}) => ({
	'accessor-pairs': severity
	, 'array-callback-return': severity
	, 'block-scoped-var': severity
	, 'class-methods-use-this': severity
	, complexity: [severity, 8]
	, 'consistent-return': 'off'
	, curly: [severity, 'all']
	, 'default-case': 'off'
	, 'dot-location': [severity, 'property']
	, 'dot-notation': severity
	, eqeqeq: [severity, 'smart']
	, 'guard-for-in': severity
	, 'no-alert': devSeverity
	, 'no-console': devSeverity
	, 'no-debugger': devSeverity
	, 'no-caller': severity
	, 'no-div-regex': severity
	, 'no-else-return': severity
	, 'no-empty-function': severity
	, 'no-eq-null': severity
	, 'no-eval': severity
	, 'no-extend-native': severity
	, 'no-extra-bind': severity
	, 'no-extra-label': severity
	, 'no-floating-decimal': severity
	, 'no-global-assign': severity
	, 'no-implicit-coercion': severity
	, 'no-implicit-globals': severity
	, 'no-implied-eval': severity
	, 'no-invalid-this': severity
	, 'no-iterator': severity
	, 'no-labels': severity
	, 'no-lone-blocks': severity
	, 'no-loop-func': severity
	, 'no-magic-numbers': ['off', {enforceConst: true}]
	, 'no-multi-spaces': severity
	, 'no-multi-str': severity
	, 'no-new': severity
	, 'no-new-func': severity
	, 'no-new-wrappers': severity
	, 'no-octal-escape': severity
	, 'no-param-reassign': severity
	, 'no-proto': severity
	, 'no-restricted-properties': severity
	, 'no-return-assign': severity
	, 'no-return-await': severity
	, 'no-script-url': severity
	, 'no-self-compare': severity
	, 'no-sequences': severity
	, 'no-throw-literal': severity
	, 'no-unmodified-loop-condition': severity
	, 'no-unused-expressions': severity
	, 'no-unused-vars': severity
	, 'no-useless-call': severity
	, 'no-useless-concat': severity
	, 'no-useless-escape': severity
	, 'no-useless-return': severity
	, 'no-void': severity
	, 'no-warning-comments': devSeverity
	, 'no-with': severity
	, 'prefer-promise-reject-errors': severity
	, radix: severity
	, 'require-await': 'off'
	, 'vars-on-top': severity
	, 'wrap-iife': severity
	, yoda: severity
})
