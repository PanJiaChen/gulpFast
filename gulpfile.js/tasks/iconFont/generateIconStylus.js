var gulp         = require('gulp'),
    config       = require('../../config/iconFont'),
    swig         = require('gulp-swig'),
    rename       = require('gulp-rename'),
    handleErrors = require('../../lib/handleErrors');

module.exports = function(codepoints, options) {
  gulp.src(config.template)
    .pipe(swig({
      data: {
        icons: codepoints.map(function(icon) {
          return {
            name: icon.name,
            code: icon.codepoint.toString(16)
          }
        }),

        fontName: config.options.fontName,
        fontPath: config.fontPath,
        className: config.className,
        comment: 'Ey, Generated by gulp/tasks/iconFont.js. I do not recommend you edit this directly but thats up to you big dog.'
      }
    }))
    .on('error', handleErrors)
    .pipe(rename(config.stylusOutputName))
    .pipe(gulp.dest(config.stylusDest));
};
