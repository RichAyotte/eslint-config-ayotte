/**
 * @overview    Ayotte style eslinting
 * @author      Richard Ayotte
 * @copyright   Copyright © 2018 Richard Ayotte
 * @date        2017-06-01 17:16:08
 * @license     MIT
 */

'use strict'

const extensions = require('./extensions')
const getBestPracticeRules = require('./get-best-practices-rules')
const getErrorRules = require('./get-error-rules')
const getEs6Rules = require('./get-es6-rules')
const getNodeRules = require('./get-node-rules')
const getPromiseRules = require('./get-promise-rules')
const getStrictModeRules = require('./get-strict-mode-rules')
const getStyleRules = require('./get-style-rules')
const getVariableRules = require('./get-variable-rules')

const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn'
const devSeverity = process.env.NODE_ENV === 'production' ? 'error' : 'off'

const rules = [getBestPracticeRules
	, getErrorRules
	, getEs6Rules
	, getNodeRules
	, getPromiseRules
	, getStyleRules
	, getVariableRules
	, getStrictModeRules].reduce((accum, getRules) => ({
	...accum
	, ...getRules({
		severity
		, devSeverity
	})
}), {})

console.log(rules)
module.exports = {
	env: {
		es6: true
		, node: true
	}
	, extends: extensions
	, parserOptions: {
		ecmaVersion: 'latest'
	}
	, plugins: ['import', 'promise']
	, rules
}
