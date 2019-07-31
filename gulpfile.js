"use strict";

const gulp = require("gulp");

const staticFiles = require("./tasks/static");
const javascript = require("./tasks/javascript");
const pug = require("./tasks/pug");
const css = require("./tasks/css");
// const mustache = require("./tasks/mustache");
// const handlebars = require("./tasks/hb");

gulp.task("css", css);

gulp.task("static", staticFiles);

gulp.task("js", javascript);

gulp.task("pug", pug);

// gulp.task('hb', handlebars);

// gulp.task('mustache', mustache);

gulp.task("build", gulp.parallel("pug", "css", "js", "static"));
