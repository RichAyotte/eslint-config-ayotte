declare module '@eslint/js' {
	import type { Linter } from 'eslint'
    interface JS {
        configs: {
            all: Linter.Config;
            recommended: Linter.Config;
        };
    }

    // eslint-disable-next-line init-declarations
    const js: JS
    export default js
}
