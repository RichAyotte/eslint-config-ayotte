"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_node_rules(input) {
    return {
        'callback-return': input.severity,
        'global-require': input.severity,
        'handle-callback-err': input.severity,
        'no-mixed-requires': input.severity,
        'no-new-require': input.severity,
        'no-path-concat': input.severity,
        'no-process-env': 'off',
        'no-process-exit': input.severity,
        'no-restricted-modules': input.severity,
        'no-sync': input.severity,
    };
}
exports.default = get_node_rules;
