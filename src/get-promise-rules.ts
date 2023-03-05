import {Linter} from 'eslint'

type Input = {
	severity: Linter.RuleLevel
	devSeverity: Linter.RuleLevel
}

export default ({severity}:Input) => ({
	'promise/always-return': 'off',
	'promise/avoid-new': 'off',
	'promise/catch-or-return': severity,
	'promise/no-callback-in-promise': severity,
	'promise/no-native': 'off',
	'promise/no-nesting': 'warn',
	'promise/no-promise-in-callback': severity,
	'promise/no-return-wrap': severity,
	'promise/param-names': severity,
})
