var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');


gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ["./frontend/fatebook.jsx"],
    transform: [reactify],
    extensions: ['.jsx'],
    cache: {},
    packageCache:{},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./app/assets/javascripts'));
  }
  build();
  bundler.on('update', build);
});
