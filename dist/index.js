"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combine_rules_1 = require("./combine_rules");
const extensions_1 = require("./extensions");
const get_best_practices_rules_1 = require("./get_best_practices_rules");
const get_error_rules_1 = require("./get_error_rules");
const get_es6_rules_1 = require("./get_es6_rules");
const get_node_rules_1 = require("./get_node_rules");
const get_promise_rules_1 = require("./get_promise_rules");
const get_strict_mode_rules_1 = require("./get_strict_mode_rules");
const get_style_rules_1 = require("./get_style_rules");
const get_variable_rules_1 = require("./get_variable_rules");
const config = {
    env: {
        es6: true,
        node: true,
    },
    extends: extensions_1.default,
    overrides: [
        {
            files: [
                '*.js',
                '*.cjs',
                '*.ts',
                '*.mjs',
                '*.tsx',
            ],
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: true,
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'promise',
    ],
    rules: [
        get_best_practices_rules_1.default,
        get_error_rules_1.default,
        get_es6_rules_1.default,
        get_node_rules_1.default,
        get_promise_rules_1.default,
        get_style_rules_1.default,
        get_variable_rules_1.default,
        get_strict_mode_rules_1.default,
    ].reduce(combine_rules_1.default, {}),
    settings: {
        'import/resolver': {
            node: true,
            typescript: true,
        },
    },
};
module.exports = config;
