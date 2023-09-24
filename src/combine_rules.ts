import { Linter } from 'eslint'

import type { Input as GetRulesInput, Output as GetRulesOutput } from './get_rules.js'

type Input = [Linter.RulesRecord, (input: GetRulesInput) => GetRulesOutput]
type Output = Linter.RulesRecord

const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn'
const dev_severity = process.env.NODE_ENV === 'production' ? 'error' : 'off'

export default function combine_rules(...args: Input): Output {
	const [
		accum,
		get_rules,
	] = args

	return {
		...accum,
		...get_rules({
			dev_severity,
			severity,
		}),
	}
}
