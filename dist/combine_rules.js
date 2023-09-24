const severity = process.env.NODE_ENV === 'production' ? 'error' : 'warn';
const dev_severity = process.env.NODE_ENV === 'production' ? 'error' : 'off';
export default function combine_rules(...args) {
    const [accum, get_rules,] = args;
    return {
        ...accum,
        ...get_rules({
            dev_severity,
            severity,
        }),
    };
}
