"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line max-lines-per-function
function get_style_rules(input) {
    return {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: ['snake_case'],
                selector: [
                    'variable',
                    'function',
                    'parameter',
                ],
            },
        ],
        '@typescript-eslint/type-annotation-spacing': input.severity,
        'array-bracket-newline': [
            input.severity,
            {
                minItems: 2,
                multiline: true,
            },
        ],
        'array-bracket-spacing': [
            input.severity,
            'never',
        ],
        'array-element-newline': [
            input.severity,
            {
                minItems: 2,
                multiline: true,
            },
        ],
        'block-spacing': input.severity,
        'brace-style': [
            input.severity,
            'stroustrup',
        ],
        'capitalized-comments': [
            input.dev_severity,
            'always',
            {
                ignoreConsecutiveComments: true,
                ignoreInlineComments: true,
            },
        ],
        'comma-dangle': [
            input.severity,
            {
                arrays: 'always-multiline',
                exports: 'never',
                functions: 'never',
                imports: 'never',
                objects: 'always-multiline',
            },
        ],
        'comma-spacing': input.severity,
        'comma-style': [
            input.severity,
            'last',
        ],
        'computed-property-spacing': input.severity,
        'consistent-this': [
            input.severity,
            'that',
        ],
        'eol-last': input.severity,
        'func-call-spacing': input.severity,
        'func-name-matching': input.severity,
        'func-names': [
            input.severity,
            'as-needed',
        ],
        'func-style': [
            input.severity,
            'declaration',
        ],
        'id-blacklist': [
            input.severity,
            'callback',
        ],
        'id-length': 'off',
        'id-match': 'off',
        indent: [
            input.severity,
            'tab',
            { MemberExpression: 0 },
        ],
        'jsx-quotes': input.severity,
        'key-spacing': input.severity,
        'keyword-spacing': input.severity,
        'line-comment-position': input.severity,
        'linebreak-style': [
            input.severity,
            'unix',
        ],
        'lines-around-comment': [
            input.severity,
            {
                afterBlockComment: false,
                afterLineComment: false,
                allowArrayEnd: true,
                allowArrayStart: true,
                allowBlockEnd: true,
                allowBlockStart: true,
                allowClassEnd: true,
                allowClassStart: true,
                allowObjectEnd: true,
                allowObjectStart: true,
                beforeBlockComment: true,
                beforeLineComment: false,
            },
        ],
        'lines-around-directive': input.severity,
        'max-classes-per-file': [
            input.severity,
            1,
        ],
        'max-depth': [
            input.severity,
            3,
        ],
        'max-len': [
            input.severity,
            {
                code: 100,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
            },
        ],
        'max-lines': [
            input.severity,
            {
                max: 310,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-lines-per-function': [
            input.severity,
            {
                max: 150,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'max-nested-callbacks': [
            input.severity,
            3,
        ],
        'max-params': [
            input.severity,
            1,
        ],
        'max-statements': [
            input.severity,
            30,
        ],
        'max-statements-per-line': [
            input.severity,
            { max: 1 },
        ],
        'multiline-ternary': 'off',
        'new-cap': input.severity,
        'new-parens': input.severity,
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': [
            input.severity,
            { ignoreChainWithDepth: 2 },
        ],
        'no-array-constructor': input.severity,
        'no-bitwise': input.severity,
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': input.severity,
        'no-mixed-operators': [
            input.severity,
            { allowSamePrecedence: true },
        ],
        'no-multi-assign': input.severity,
        'no-multiple-empty-lines': input.severity,
        'no-negated-condition': input.severity,
        'no-nested-ternary': input.severity,
        'no-new-object': input.severity,
        'no-plusplus': [
            input.severity,
            { allowForLoopAfterthoughts: false },
        ],
        'no-restricted-syntax': 'off',
        'no-tabs': 'off',
        'no-ternary': 'off',
        'no-trailing-spaces': input.severity,
        'no-underscore-dangle': [
            input.severity,
            { allowAfterThis: true },
        ],
        'no-unneeded-ternary': input.severity,
        'no-whitespace-before-property': input.severity,
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': [
            input.severity,
            {
                ExportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                },
                ImportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                },
                ObjectExpression: {
                    minProperties: 2,
                    multiline: true,
                },
                ObjectPattern: {
                    minProperties: 2,
                    multiline: true,
                },
            },
        ],
        'object-curly-spacing': [
            input.severity,
            'always',
            {
                arraysInObjects: false,
                objectsInObjects: false,
            },
        ],
        'object-property-newline': input.severity,
        'one-var': [
            input.severity,
            'never',
        ],
        'one-var-declaration-per-line': 'off',
        'operator-assignment': input.severity,
        'operator-linebreak': [
            input.severity,
            'before',
        ],
        'padded-blocks': [
            input.severity,
            'never',
        ],
        'quote-props': [
            input.severity,
            'as-needed',
        ],
        quotes: [
            input.severity,
            'single',
            { allowTemplateLiterals: true },
        ],
        semi: [
            input.severity,
            'never',
        ],
        'semi-spacing': 'off',
        'sort-keys': [
            input.severity,
            'asc',
            {
                caseSensitive: false,
                natural: true,
            },
        ],
        'sort-vars': [
            input.severity,
            { ignoreCase: true },
        ],
        'space-before-blocks': [
            input.severity,
            'always',
        ],
        'space-before-function-paren': [
            input.severity,
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': [
            input.severity,
            'never',
        ],
        'space-infix-ops': input.severity,
        'space-unary-ops': input.severity,
        'spaced-comment': [
            input.severity,
            'always',
        ],
        'template-tag-spacing': [
            input.severity,
            'never',
        ],
        'unicode-bom': input.severity,
        'wrap-regex': input.severity,
    };
}
exports.default = get_style_rules;
