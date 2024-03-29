export default function get_variable_rules({ severity }) {
    return {
        'init-declarations': severity,
        'no-catch-shadow': severity,
        'no-label-var': severity,
        'no-restricted-globals': severity,
        'no-shadow': severity,
        'no-shadow-restricted-names': severity,
        'no-undef-init': severity,
        'no-undefined': severity,
        'no-use-before-define': severity,
    };
}
