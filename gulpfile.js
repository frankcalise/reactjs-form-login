var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var merge = require('utils-merge');
var concat = require('gulp-concat');

var path = {
  HTML: 'index.html',
  CSS: './node_modules/bootstrap/dist/css/bootstrap.min.css',
  MINIFIED_OUT: 'bundle.min.js',
  OUT: 'bundle.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/js',
  DEST_CSS: 'dist/css',
  ENTRY_POINT: './js/app.js'
};

function copyIndex() {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
};

function buildCss() {
  gulp.src([
    path.CSS
  ])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(path.DEST_CSS));
};

// copy index.html out to dist directory
gulp.task('copyIndex', function () {
  copyIndex();
});

// styles out to dist/css
gulp.task('buildCss', function () {
  
});

// default task to run
gulp.task('default', function() {
  gulp.watch(path.HTML, ['copyIndex']);
  gulp.watch(path.CSS, ['buildCss']);

  var args = merge(watchify.args, { debug: true, extensions: ['.js'] });
  var bundler = browserify(path.ENTRY_POINT)
    .plugin(watchify)
    .transform(babelify, {presets: ['es2015', 'react']});

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
  };

  

  // run on initial gulp from cli
  copyIndex();
  build();
  buildCss();
  bundler.on('update', build);
});