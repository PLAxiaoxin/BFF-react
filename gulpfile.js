/*
 * @Author: your name
 * @Date: 2020-11-14 19:04:09
 * @LastEditTime: 2020-11-14 19:14:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vip/gulpfile.js
 */
const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const babelConfig = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-transform-modules-commonjs',
  ],
};
//上线环境
function buildprod() {
  return gulp
    .src(entry)
    .pipe(
      babel({
        babelrc: false,
        ignore: cleanEntry,
        ...babelConfig,
      })
    )
    .pipe(gulp.dest('dist'));
}
function buildlint() {
  return gulp
    .src(entry)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}
function builddev() {
  //开发环境整体拷贝
  const _entry = 'src/server/**/*';
  return watch(
    _entry,
    {
      ignoreInitial: false,
    },
    function() {
      gulp.src(_entry).pipe(gulp.dest('dist'));
    }
  );
}
let build = gulp.series(builddev);
if (process.env.NODE_ENV == 'production') {
  build = gulp.series(buildprod, buildconfig);
}
if (process.env.NODE_ENV == 'lint') {
  build = gulp.series(buildlint);
}
gulp.task('default', build);
