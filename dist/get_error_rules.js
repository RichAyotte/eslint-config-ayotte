"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_error_rules({ severity }) {
    return {
        'no-await-in-loop': severity,
        'no-compare-neg-zero': severity,
        'no-extra-parens': [
            severity,
            'functions',
        ],
        'no-prototype-builtins': severity,
        'no-template-curly-in-string': severity,
        'no-unreachable': severity,
        'no-unsafe-negation': severity,
        'valid-jsdoc': severity,
    };
}
exports.default = get_error_rules;
