"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn';
const dev_severity = process.env.NODE_ENV === 'production' ? 'error' : 'off';
function combine_rules(...args) {
    const [accum, get_rules,] = args;
    return {
        ...accum,
        ...get_rules({
            dev_severity,
            severity,
        }),
    };
}
exports.default = combine_rules;
