"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_variable_rules(input) {
    return {
        'init-declarations': input.severity,
        'no-catch-shadow': input.severity,
        'no-label-var': input.severity,
        'no-restricted-globals': input.severity,
        'no-shadow': input.severity,
        'no-shadow-restricted-names': input.severity,
        'no-undef-init': input.severity,
        'no-undefined': input.severity,
        'no-use-before-define': input.severity,
    };
}
exports.default = get_variable_rules;
