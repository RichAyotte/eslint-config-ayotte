import legacy_config from './legacy_config.js'
import type { Linter } from 'eslint'

const config: Linter.FlatConfig[] = [...legacy_config]

export default config
