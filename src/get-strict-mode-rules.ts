import {Linter} from 'eslint'

type Input = {
	severity: Linter.RuleLevel
	devSeverity: Linter.RuleLevel
}

export default ({severity}:Input) => ({
	strict: [severity, 'safe'],
})
