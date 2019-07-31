'use strict'

const gulp = require('gulp');
const pug = require('gulp-pug');

const src = './src/**/*.pug';
const dest = './dist/';

module.exports = function pugHtml() { 
    return gulp.src(src)
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(dest));
}
