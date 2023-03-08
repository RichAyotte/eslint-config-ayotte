"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_strict_mode_rules(input) {
    return {
        strict: [
            input.severity,
            'safe',
        ],
    };
}
exports.default = get_strict_mode_rules;
