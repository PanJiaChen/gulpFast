var config = require('../../config');
var gulp   = require('gulp');
var rev    = require('gulp-rev');

gulp.task('rev-assets', function() {
  // Ignore what we dont want to hash in this step
  var ignore = '!' + config.publicDirectory + '/**/*+(css|js|json|html)';

  return gulp.src([config.publicDirectory + '/**/*', ignore])
    .pipe(rev())
    .pipe(gulp.dest(config.publicDirectory))
    .pipe(rev.manifest('dist/rev-manifest.json', {merge: true}))
    .pipe(gulp.dest(''));
});
