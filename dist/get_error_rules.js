export default function get_error_rules({ severity }) {
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
    };
}
