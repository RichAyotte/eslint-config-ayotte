"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ severity }) => ({
    'callback-return': severity,
    'global-require': severity,
    'handle-callback-err': severity,
    'no-mixed-requires': severity,
    'no-new-require': severity,
    'no-path-concat': severity,
    'no-process-env': 'off',
    'no-process-exit': severity,
    'no-restricted-modules': severity,
    'no-sync': severity,
});
