"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");


var style = function () {
  return gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 1 version",
          "last 2 Chrome versions",
          "last 2 Firefox versions",
          "last 2 Opera versions",
          "last 2 Edge versions"
        ]
      }),
      mqpacker({sort: true})
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
};

gulp.task("style", style);
gulp.task("style:clean", ["clean"], style);

var scripts = function () {
  return gulp.src("js/**")
    .pipe(gulp.dest("build"));
};
gulp.task("scripts", scripts);
gulp.task("scripts:clean", ["clean"], scripts);

var imagemin = require("gulp-imagemin");
gulp.task("images", ["copy"], function () {
  return gulp.src("build/img/**/*.{jpg,png,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
});

var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
gulp.task("symbols", ["clean"], function () {
  return gulp.src("img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("build/img"));
});

var copyHTML = function () {
  return gulp.src("*.html")
    .pipe(gulp.dest("build"));
};
gulp.task("copy-html", copyHTML);
gulp.task("copy-html:clean", ["clean"], copyHTML);

gulp.task("copy", ["copy-html:clean", "scripts:clean"], function () {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/*.*"
  ], {base: "."})
    .pipe(gulp.dest("build"));
});

var del = require("del");
gulp.task("clean", function () {
  return del("build");
});

gulp.task("serve", ["build"], function () {
  server.init({
    server: "build",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]).on("change", function () {
    server.reload({stream: true});
  });
  gulp.watch("*.html", ["copy-html"]).on("change", server.reload);
  gulp.watch("js/*.js", ["scripts"]).on("change", server.reload);
});

gulp.task("build", ["copy", "style:clean", "images", "symbols"]);
