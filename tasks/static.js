'use strict'

const gulp = require('gulp');

const src = './src/static/**/*.*';
const dest = './dist/static/';


module.exports = function staticFiles() {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
};
