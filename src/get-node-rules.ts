import {Linter} from 'eslint'

type Input = {
	severity: Linter.RuleLevel
	devSeverity: Linter.RuleLevel
}

export default ({severity}:Input) => ({
	'callback-return': severity,
	'global-require': severity,
	'handle-callback-err': severity,
	'no-mixed-requires': severity,
	'no-new-require': severity,
	'no-path-concat': severity,
	'no-process-env': 'off',
	'no-process-exit': severity,
	'no-restricted-modules': severity,
	'no-sync': severity,
})
