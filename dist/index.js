"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extensions_1 = require("./extensions");
const get_best_practices_rules_1 = require("./get-best-practices-rules");
const get_error_rules_1 = require("./get-error-rules");
const get_es6_rules_1 = require("./get-es6-rules");
const get_node_rules_1 = require("./get-node-rules");
const get_promise_rules_1 = require("./get-promise-rules");
const get_strict_mode_rules_1 = require("./get-strict-mode-rules");
const get_style_rules_1 = require("./get-style-rules");
const get_variable_rules_1 = require("./get-variable-rules");
const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn';
const devSeverity = process.env.NODE_ENV === 'production' ? 'error' : 'off';
const rules = [get_best_practices_rules_1.default,
    get_error_rules_1.default,
    get_es6_rules_1.default,
    get_node_rules_1.default,
    get_promise_rules_1.default,
    get_style_rules_1.default,
    get_variable_rules_1.default,
    get_strict_mode_rules_1.default].reduce((accum, getRules) => ({
    ...accum,
    ...getRules({
        severity,
        devSeverity,
    }),
}), {});
const config = {
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    extends: extensions_1.default,
    overrides: [{
            files: ['*.js', '*.cjs', '*.ts', '*.mjs', '*.tsx'],
        }],
    plugins: ['import', 'promise', '@typescript-eslint'],
    rules,
    settings: {
        'import/resolver': {
            typescript: true,
        },
    },
};
module.exports = config;
