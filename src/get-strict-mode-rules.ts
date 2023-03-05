import { Linter } from 'eslint'

type Input = {
	severity: Linter.RuleLevel
	dev_severity: Linter.RuleLevel
}

export default ({ severity }: Input) => ({
	strict: [
		severity,
		'safe',
	],
})
