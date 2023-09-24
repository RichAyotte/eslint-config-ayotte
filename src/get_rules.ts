import { Linter } from 'eslint'

export type Input = {
	severity: Linter.RuleLevel
	dev_severity: Linter.RuleLevel
}
export type Output = Linter.RulesRecord
