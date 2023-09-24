export default function get_strict_mode_rules({ severity }) {
    return {
        strict: [
            severity,
            'safe',
        ],
    };
}
