var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function (gulp, plugins) {
    return function () {
        var b = browserify({
            entries: 'build/texen.js',
            debug: false,
            standalone: 'tx'
        });

        return b.bundle()
            .pipe(source('build/texen.js'))
            .pipe(plugins.rename('texen.js'))
            .pipe(gulp.dest('dist'))
            .pipe(plugins.rename('texen.min.js'))
            .pipe(buffer())
            .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(plugins.uglify())
            .on('error', plugins.util.log)
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest('dist'));
    };
};
