"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_promise_rules({ severity }) {
    return {
        'promise/always-return': 'off',
        'promise/avoid-new': 'off',
        'promise/catch-or-return': severity,
        'promise/no-callback-in-promise': severity,
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': severity,
        'promise/no-return-wrap': severity,
        'promise/param-names': severity,
    };
}
exports.default = get_promise_rules;
