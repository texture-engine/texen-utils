var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
    return require('./gulp_tasks/' + task)(gulp, plugins);
}

gulp.task('ts', getTask('typescript'));
gulp.task('browserify', ['ts'], getTask('browserify'));
gulp.task('doc', getTask('typedoc'));
gulp.task('tslint', getTask('tslint'));
gulp.task('test', ['tslint']);
gulp.task('clean', getTask('clean'));
gulp.task('default', ['browserify', 'test', 'doc']);

gulp.task('watch', ['browserify'], function () {
    gulp.watch(conf.watch, ['browserify']);
});
