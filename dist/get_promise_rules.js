"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_promise_rules(input) {
    return {
        'promise/always-return': 'off',
        'promise/avoid-new': 'off',
        'promise/catch-or-return': input.severity,
        'promise/no-callback-in-promise': input.severity,
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': input.severity,
        'promise/no-return-wrap': input.severity,
        'promise/param-names': input.severity,
    };
}
exports.default = get_promise_rules;
