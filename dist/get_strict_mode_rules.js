"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get_strict_mode_rules({ severity }) {
    return {
        strict: [
            severity,
            'safe',
        ],
    };
}
exports.default = get_strict_mode_rules;
