import legacy from './legacy.js'
import type { Linter } from 'eslint'

const config: Linter.FlatConfig[] = [...legacy]

export default config
