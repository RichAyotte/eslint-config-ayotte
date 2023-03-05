"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ severity }) => ({
    'arrow-body-style': [
        severity,
        'as-needed',
    ],
    'arrow-parens': [
        severity,
        'as-needed',
    ],
    'arrow-spacing': [
        severity,
        {
            before: true,
            after: true,
        },
    ],
    'generator-star-spacing': [
        severity,
        {
            before: false,
            after: true,
        },
    ],
    'import/order': [
        severity,
        {
            groups: [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index',
            ],
        },
    ],
    'no-confusing-arrow': severity,
    'no-duplicate-imports': severity,
    'no-restricted-imports': 'off',
    'no-useless-computed-key': severity,
    'no-useless-constructor': severity,
    'no-useless-rename': severity,
    'no-var': severity,
    'object-shorthand': severity,
    'prefer-arrow-callback': severity,
    'prefer-const': severity,
    'prefer-destructuring': severity,
    'prefer-numeric-literals': severity,
    'prefer-object-spread': severity,
    'prefer-rest-params': severity,
    'prefer-spread': severity,
    'prefer-template': severity,
    'rest-spread-spacing': [
        severity,
        'never',
    ],
    'sort-imports': 'off',
    'symbol-description': severity,
    'template-curly-spacing': [
        severity,
        'never',
    ],
    'yield-star-spacing': severity,
});
