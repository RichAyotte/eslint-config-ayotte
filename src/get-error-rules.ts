import { Linter } from 'eslint'

type Input = {
	severity: Linter.RuleLevel
	dev_severity: Linter.RuleLevel
}

export default ({ severity }: Input) => ({
	'no-await-in-loop': severity,
	'no-compare-neg-zero': severity,
	'no-extra-parens': [
		severity,
		'functions',
	],
	'no-prototype-builtins': severity,
	'no-template-curly-in-string': severity,
	'no-unreachable': severity,
	'no-unsafe-negation': severity,
	'valid-jsdoc': severity,
})
