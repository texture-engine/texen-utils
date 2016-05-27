module.exports = function (gulp, plugins, conf) {
    return function () {
        return gulp
            .src('src/**/*.ts')
            .pipe(plugins.typedoc({
                module: 'commonjs',
                out: 'doc',
                mode: 'file',
                name: 'tx'
            }));
    };
};
