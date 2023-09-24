declare module '@eslint/eslintrc' {
	import type { Linter } from 'eslint'

	export interface FlatCompatInput {
		allConfig: Linter.Config
		baseDirectory: string
		recommendedConfig: Linter.Config
		resolvePluginsRelativeTo: string
	}

	export class FlatCompat {
		constructor(config: FlatCompatInput)
		config(config: Linter.Config): Linter.FlatConfig[]
	}
}
